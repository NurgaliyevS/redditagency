import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { refreshAccessToken } from "@/utils/refreshAccessToken";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { q } = req.query;
  if (!q || typeof q !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid query parameter' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.accessToken || !session.refreshToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Helper to fetch subreddits with a given token
    const fetchSubreddits = async (token) => {
      const response = await fetch(`https://oauth.reddit.com/subreddits/search?q=${encodeURIComponent(q)}&limit=20`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'User-Agent': 'Post Content/1.0.0'
        }
      });
      return response;
    };

    // 1st try with current access token
    let response = await fetchSubreddits(session.accessToken);

    // If unauthorized, try to refresh token and retry once
    if (response.status === 401) {
      try {
        const refreshed = await refreshAccessToken(session.refreshToken);
        response = await fetchSubreddits(refreshed.access_token);
        // Optionally: update session with new access token here
      } catch (refreshError) {
        return res.status(401).json({ error: 'Failed to refresh token' });
      }
    }

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    const subreddits = (data.data.children || [])
      .filter(child => !child.data.display_name.startsWith('u_'))
      .map(child => child.data);

    return res.status(200).json({ subreddits });
  } catch (error) {
    console.error('Error searching subreddits:', error);
    return res.status(500).json({ error: 'Failed to search subreddits' });
  }
}