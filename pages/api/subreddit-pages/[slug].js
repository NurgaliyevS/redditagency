import { getSubredditPageData } from '../../../lib/getSubredditPageData.js';

/**
 * API route for fetching subreddit page data
 * Note: This is primarily for admin/development purposes.
 * Main data fetching for SEO pages should use getStaticProps
 */
export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  const result = await getSubredditPageData(slug);
  
  // Handle null result (database connection issues)
  if (!result) {
    return res.status(500).json({
      success: false,
      error: 'Database connection failed'
    });
  }
  
  if (!result.success) {
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch subreddit page',
      details: result.error
    });
  }

  if (!result.data) {
    return res.status(404).json({ error: 'Subreddit page not found' });
  }

  res.status(200).json({
    success: true,
    data: result.data
  });
}
