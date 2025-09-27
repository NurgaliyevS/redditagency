import connectDB from '../../lib/mongodb.js';
import SubredditPage from '../../models/SubredditPage.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const { status = 'published' } = req.query;
    
    let query = {};
    if (status) {
      query.status = status;
    }
    
    const subredditPages = await SubredditPage.find(query)
      .select('keyword slug title_tag meta_description h1 status created_at updated_at')
      .sort({ created_at: -1 });

    res.status(200).json({
      success: true,
      data: subredditPages,
      count: subredditPages.length
    });
  } catch (error) {
    console.error('Error fetching subreddit pages:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch subreddit pages',
      details: error.message
    });
  }
}
