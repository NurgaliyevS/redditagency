import { seedSubredditPages } from '../../lib/seedSubredditPages.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Add basic security check (you can enhance this)
  const { authorization } = req.headers;
  if (authorization !== `Bearer ${process.env.SEED_API_KEY || 'default-seed-key'}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const result = await seedSubredditPages();
    
    res.status(200).json({
      success: true,
      message: `Successfully seeded ${result.length} subreddit pages`,
      data: result
    });
  } catch (error) {
    console.error('Seeding error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to seed subreddit pages',
      details: error.message
    });
  }
}
