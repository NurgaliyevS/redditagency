import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import connectMongoDB from "@/backend/mongodb";
import ScheduledPost from "@/backend/ScheduledPostSchema";
import { differenceInMinutes } from "date-fns";
import { refreshAccessToken } from '@/utils/refreshAccessToken';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // Use system temp directory
      cb(null, os.tmpdir());
    },
    filename: function (req, file, cb) {
      // Generate unique filename
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB limit
  },
  fileFilter: function (req, file, cb) {
    // Only allow image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Create middleware function
const uploadMiddleware = (req, res) => {
  return new Promise((resolve, reject) => {
    console.log('=== MULTER MIDDLEWARE START ===');
    console.log('Multer config:', {
      storage: upload.storage ? 'configured' : 'not configured',
      limits: upload.limits,
      fileFilter: upload.fileFilter ? 'configured' : 'not configured'
    });
    
    // Use the multer instance directly
    const singleUpload = upload.single('image');
    
    singleUpload(req, res, (err) => {
      console.log('=== MULTER CALLBACK ===');
      console.log('Multer callback error:', err);
      console.log('Multer callback req.body:', req.body);
      console.log('Multer callback req.file:', req.file);
      
      if (err) {
        console.log('Multer rejecting with error:', err.message);
        reject(err);
      } else {
        console.log('Multer resolving successfully');
        resolve();
      }
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  async function uploadImageToReddit(accessToken, imageBuffer, filename, mimetype) {
    // Step 1: Get upload credentials
    const formData = new FormData();
    formData.append('filepath', filename);
    formData.append('mimetype', mimetype);

    const response = await fetch('https://oauth.reddit.com/api/media/asset.json', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'User-Agent': 'Post Content/1.0.0'
      },
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Reddit media upload failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    // Step 2: Upload to S3
    const s3FormData = new FormData();
    
    // Add all fields from Reddit response
    data.args.fields.forEach(field => {
      s3FormData.append(field.name, field.value);
    });
    
    // Add the actual file as the last field
    s3FormData.append('file', new Blob([imageBuffer], { type: mimetype }), filename);
    
    const s3Response = await fetch(`https:${data.args.action}`, {
      method: 'POST',
      body: s3FormData
    });
    
    if (!s3Response.ok) {
      throw new Error(`S3 upload failed: ${s3Response.status}`);
    }
    
    return data.asset.asset_id;
}

  async function makeRedditRequest(accessToken, body) {
    const response = await fetch('https://oauth.reddit.com/api/submit', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Post Content/1.0.0'
      },
      body: new URLSearchParams(body)
    });

    // If unauthorized, throw specific error
    if (response.status === 401) {
      throw new Error('UNAUTHORIZED');
    }

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Non-JSON response: ${text.substring(0, 100)}...`);
    }

    return response.json();
  }

  try {
    
    try {
      await uploadMiddleware(req, res);
    } catch (uploadError) {
      return res.status(400).json({ 
        message: 'File upload error',
        error: uploadError.message 
      });
    }

    const session = await getServerSession(req, res, authOptions);
    
    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Get the submitted data from form fields
    const community = req.body.community;
    const title = req.body.title;
    const text = req.body.text || '';
    const scheduledDateTime = req.body.scheduledDateTime; // ISO formatted date-time string
    const timeZone = req.body.timeZone;
    const currentClientTime = req.body.currentClientTime; // ISO formatted current client time
    const type = req.body.type || 'text';
    const isCrossPosting = req.body.isCrossPosting === 'true';
    const flairId = req.body.flairId;
    const flairText = req.body.flairText;
    
    // Handle image file if present
    let mediaId = null;
    let imageFileName = null;
    let imageSize = null;
    
    if (req.file && type === 'image') {
      const imageFile = req.file;
      try {
        // Read the uploaded file
        const imageBuffer = fs.readFileSync(imageFile.path);
        
        console.log('Uploading image to Reddit media API...');
        
        // Upload image to Reddit to get media_id
        mediaId = await uploadImageToReddit(
          session.accessToken,
          imageBuffer,
          imageFile.originalname,
          imageFile.mimetype
        );
        
        imageFileName = imageFile.originalname;
        imageSize = imageFile.size;
        
        console.log('Image uploaded successfully to Reddit. Media ID:', mediaId);
        
        // Clean up temporary file
        fs.unlinkSync(imageFile.path);
        
      } catch (imageError) {
        // Clean up temporary file on error
        if (req.file && fs.existsSync(req.file.path)) {
          try {
            fs.unlinkSync(req.file.path);
          } catch (cleanupError) {
            console.error('Error cleaning up file:', cleanupError);
          }
        }
        
        console.error('Error uploading image to Reddit:', imageError);
        return res.status(500).json({
          message: 'Error uploading image to Reddit',
          error: imageError.message
        });
      }
    }

    console.log(req.body, 'req.body');

    // Validate required fields
    if (!community || !title || !scheduledDateTime) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        received: { community, title, text, scheduledDateTime }
      });
    }
    
    // For text posts, ensure text content is provided
    if (type === 'text' && !text) {
      return res.status(400).json({ 
        message: 'Text content is required for text posts',
      });
    }
    
    // For image posts, ensure image is provided
    if (type === 'image' && !req.file) {
      return res.status(400).json({ 
        message: 'Image is required for image posts',
      });
    }

    // Check if the Reddit access token is available in the session
    if (!session.accessToken) {
      return res.status(401).json({ 
        message: 'Reddit authentication required',
        error: 'No Reddit access token found in session'
      });
    }
    
    // Check if the Reddit refresh token is available in the session
    if (!session.refreshToken) {
      return res.status(401).json({ 
        message: 'Reddit refresh token required',
        error: 'No Reddit refresh token found in session'
      });
    }
    
    // Calculate time difference in minutes
    const minutesInFuture = differenceInMinutes(scheduledDateTime, currentClientTime);
    
    // Determine if we should post immediately or schedule
    // Post immediately if scheduled time is in the past or within 2 minutes
    const shouldPostImmediately = minutesInFuture <= 2;
    
    // If we should post immediately, send it to Reddit now
    if (shouldPostImmediately) {
      console.log('Posting to Reddit immediately...');
      
      // Remove r/ prefix if it exists
      const cleanCommunity = community.replace(/^r\//, '');
      
      const postBody = {
        'sr': cleanCommunity,
        'title': title,
        'api_type': 'json',
        'resubmit': 'true'
      };

      // Add content based on post type
      if (type === 'image') {
        postBody.kind = 'image';
        postBody.url = `https://i.redd.it/${mediaId}`;
        if (text) {
          postBody.text = text;
        }
        // Wait for Reddit to process the image
        await new Promise(resolve => setTimeout(resolve, 5000));
        if (text) {
          postBody.text = text; // Optional text for image posts
        }
      } else {
        postBody.text = text;
      }

      // Add flair if provided
      if (flairId) {
        postBody.flair_id = flairId;
        if (flairText) {
          postBody.flair_text = flairText;
        }
      }

      console.log('Preparing to post to Reddit. Post body:', postBody);
      console.log('Using access token:', session.accessToken && session.accessToken.substring(0, 8) + '...');
      let redditData;
      try {
        // First attempt with current token
        redditData = await makeRedditRequest(session.accessToken, postBody);
        console.log('Reddit API response (first attempt):', JSON.stringify(redditData));
      } catch (error) {
        if (error.message === 'UNAUTHORIZED' && session.refreshToken) {
          console.log('Token expired, attempting refresh...');
          // Try refreshing the token
          const refreshedTokens = await refreshAccessToken(session.refreshToken);
          console.log('Token refreshed. New access token:', refreshedTokens.access_token && refreshedTokens.access_token.substring(0, 8) + '...');
          // Retry with new token
          redditData = await makeRedditRequest(refreshedTokens.access_token, postBody);
          console.log('Reddit API response (after refresh):', JSON.stringify(redditData));
          // Update session token for future requests
          session.accessToken = refreshedTokens.access_token;
        } else {
          console.error('Error posting to Reddit:', error);
          throw error;
        }
      }

      if (!redditData?.json?.data) {
        console.error('Invalid response from Reddit API:', JSON.stringify(redditData));
        throw new Error('Invalid response from Reddit API');
      }

      // Connect to MongoDB
      await connectMongoDB();
      console.log('Saving post to MongoDB. Data:', {
        userId: session.user.id,
        community: cleanCommunity,
        title,
        text,
        type,
        scheduledFor: scheduledDateTime,
        userTimeZone: timeZone,
        status: 'published',
        redditPostId: redditData?.json?.data?.id || null,
        redditFullname: redditData?.json?.data?.name || null,
        redditAccessToken: session.accessToken,
        redditRefreshToken: session.refreshToken,
        postedAt: currentClientTime,
        redditPostUrl: redditData?.json?.data?.url || null,
        isCrossPosting: isCrossPosting,
        flairId,
        flairText
      });
      const postedPost = new ScheduledPost({
        userId: session.user.id,
        community: cleanCommunity,
        title,
        text,
        type,
        scheduledFor: scheduledDateTime,
        userTimeZone: timeZone,
        status: 'published',
        redditPostId: redditData?.json?.data?.id || null,
        redditFullname: redditData?.json?.data?.name || null,
        redditAccessToken: session.accessToken,
        redditRefreshToken: session.refreshToken,
        postedAt: currentClientTime,
        redditPostUrl: redditData?.json?.data?.url || null,
        isCrossPosting: isCrossPosting,
        flairId,
        flairText,
        mediaId,
        imageFileName,
        imageSize
      });
      const savedPost = await postedPost.save();
      console.log('Post saved to MongoDB. Saved post:', savedPost);

      return res.status(200).json({
        message: 'Post submitted to Reddit immediately',
        data: {
          id: savedPost._id,
          community,
          title,
          scheduledFor: scheduledDateTime,
          postedAt: currentClientTime,
          redditPostId: redditData?.json?.data?.id || null,
          redditFullname: redditData?.json?.data?.name || null,
          redditPostUrl: redditData?.json?.data?.url || null,
          isCrossPosting: isCrossPosting
        }
      });
      
    } 
    // Otherwise, schedule the post for later
    else {
      // Connect to MongoDB
      await connectMongoDB();

      console.log("scheduling post...")

      // Create a new scheduled post
      const cleanCommunity = community.replace(/^r\//, '');
      
      const scheduledPost = new ScheduledPost({
        userId: session.user.id,
        community: cleanCommunity,
        title,
        text,
        type,
        scheduledFor: scheduledDateTime,
        userTimeZone: timeZone, // Store the user's timezone for reference
        status: 'scheduled',
        redditAccessToken: session.accessToken,
        redditRefreshToken: session.refreshToken,
        isCrossPosting: isCrossPosting,
        flairId,
        flairText,
        mediaId,
        imageFileName,
        imageSize
      });
      
      const savedPost = await scheduledPost.save();

      return res.status(200).json({
        message: 'Post scheduled successfully',
        data: {
          id: savedPost._id,
          community,
          title,
          scheduledFor: scheduledDateTime,
          timeZone,
          createdAt: currentClientTime,
          isCrossPosting: isCrossPosting
        }
      });
    }

  } catch (error) {
    // Clean up any temporary files on error
    if (req.file && fs.existsSync(req.file.path)) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (cleanupError) {
        console.error('Error cleaning up temporary file:', cleanupError);
      }
    }
    
    console.error('Error handling post request:', error);
    return res.status(500).json({ 
      message: 'Error handling post request',
      error: error.message 
    });
  }
}