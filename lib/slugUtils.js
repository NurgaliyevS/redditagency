/**
 * Utility functions for slug generation and validation
 * Based on PRD requirements for automatic slug generation from keywords
 */

/**
 * Generate a URL-friendly slug from a keyword
 * @param {string} keyword - The keyword to convert to slug
 * @returns {string} - URL-friendly slug
 */
export function generateSlugFromKeyword(keyword) {
  if (!keyword || typeof keyword !== 'string') {
    throw new Error('Keyword must be a non-empty string');
  }

  return keyword
    .toLowerCase()
    .trim()
    // Replace spaces and special characters with hyphens
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Validate if a slug is properly formatted
 * @param {string} slug - The slug to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export function isValidSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return false;
  }

  // Check if slug matches the expected pattern
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugPattern.test(slug);
}

/**
 * Normalize a slug (ensure it's lowercase and properly formatted)
 * @param {string} slug - The slug to normalize
 * @returns {string} - Normalized slug
 */
export function normalizeSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return '';
  }

  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Check if two slugs are equivalent (case-insensitive, normalized)
 * @param {string} slug1 - First slug
 * @param {string} slug2 - Second slug
 * @returns {boolean} - True if equivalent, false otherwise
 */
export function areSlugsEquivalent(slug1, slug2) {
  const normalized1 = normalizeSlug(slug1);
  const normalized2 = normalizeSlug(slug2);
  return normalized1 === normalized2;
}

/**
 * Generate a unique slug by appending a number if needed
 * @param {string} baseSlug - The base slug
 * @param {Array} existingSlugs - Array of existing slugs to check against
 * @returns {string} - Unique slug
 */
export function generateUniqueSlug(baseSlug, existingSlugs = []) {
  let slug = normalizeSlug(baseSlug);
  let counter = 1;
  let uniqueSlug = slug;

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

/**
 * Extract keyword from slug (reverse operation)
 * @param {string} slug - The slug to extract keyword from
 * @returns {string} - The original keyword (best guess)
 */
export function extractKeywordFromSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return '';
  }

  return slug
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
