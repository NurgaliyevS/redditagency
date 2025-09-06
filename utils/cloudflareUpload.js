import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

// Initialize S3 client for Cloudflare R2
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
  },
});

/**
 * Upload image to Cloudflare R2
 * @param {Buffer} imageBuffer - Image file buffer
 * @param {string} fileName - Name for the uploaded file
 * @param {string} contentType - MIME type of the image
 * @returns {Promise<{success: boolean, url?: string, error?: string}>}
 */
export async function uploadImageToR2(imageBuffer, fileName, contentType) {
  try {
    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${fileName}`;
    
    // Upload to R2
    const uploadCommand = new PutObjectCommand({
      Bucket: "reddit-images",
      Key: uniqueFileName,
      Body: imageBuffer,
      ContentType: contentType,
      ACL: "public-read", // Make image publicly accessible
    });

    await s3Client.send(uploadCommand);

    // Return public URL - use the public development URL that Reddit can access
    const publicUrl = `${process.env.CLOUDFLARE_PUBLIC_URL}/${uniqueFileName}`;
    
    return {
      success: true,
      url: publicUrl,
      fileName: uniqueFileName
    };
  } catch (error) {
    console.error('Error uploading image to R2:', error);
    return {
      success: false,
      error: error.message || 'Failed to upload image'
    };
  }
}

/**
 * Delete image from Cloudflare R2
 * @param {string} fileName - Name of the file to delete
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function deleteImageFromR2(fileName) {
  try {
    const deleteCommand = new DeleteObjectCommand({
      Bucket: "reddit-images",
      Key: fileName,
    });

    await s3Client.send(deleteCommand);
    
    return {
      success: true
    };
  } catch (error) {
    console.error('Error deleting image from R2:', error);
    return {
      success: false,
      error: error.message || 'Failed to delete image'
    };
  }
}

/**
 * Validate image file
 * @param {File} file - File object to validate
 * @returns {Promise<{valid: boolean, error?: string}>}
 */
export function validateImageFile(file) {
  // Check file size (Reddit limit is 20MB)
  const maxSize = 20 * 1024 * 1024; // 20MB in bytes
  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'Image size must be less than 20MB'
    };
  }

  // Check file type
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Only JPEG, PNG, GIF, and WebP images are supported'
    };
  }

  return {
    valid: true
  };
}

/**
 * Convert file to buffer for upload
 * @param {File} file - File object to convert
 * @returns {Promise<Buffer>}
 */
export function fileToBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result;
      const buffer = Buffer.from(arrayBuffer);
      resolve(buffer);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}
