import { getAllSubredditPageSlugs } from './getSubredditPageData.js';

/**
 * Legacy function - use getAllSubredditPageSlugs instead
 * This function is kept for backward compatibility
 */
export async function getStaticSubredditPaths() {
  const result = await getAllSubredditPageSlugs();
  
  if (result.success) {
    return result.paths;
  }
  
  // Return empty array if database is not available during build
  console.error('Error getting static subreddit paths:', result.error);
  return [];
}
