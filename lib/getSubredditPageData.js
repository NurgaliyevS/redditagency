import connectDB from './mongodb.js';
import SubredditPage from '../models/SubredditPage.js';

/**
 * Get subreddit page data by slug for getStaticProps
 * This function is optimized for server-side rendering and ISR
 */
export async function getSubredditPageData(slug) {
  try {
    await connectDB();
    
    const pageData = await SubredditPage.findBySlug(slug);
    
    if (!pageData) {
      return null;
    }

    // Convert Mongoose document to plain object for serialization
    const serializedData = JSON.parse(JSON.stringify(pageData));
    
    return {
      success: true,
      data: serializedData
    };
  } catch (error) {
    console.error('Error fetching subreddit page data:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Get all subreddit page slugs for getStaticPaths
 * This function is optimized for static generation
 */
export async function getAllSubredditPageSlugs() {
  try {
    await connectDB();
    
    const pages = await SubredditPage.find({ status: 'published' })
      .select('slug')
      .lean();

    const paths = pages.map((page) => ({
      params: { slug: page.slug }
    }));

    return {
      success: true,
      paths,
      fallback: 'blocking' // Enable ISR fallback
    };
  } catch (error) {
    console.error('Error fetching subreddit page slugs:', error);
    return {
      success: false,
      paths: [],
      fallback: false
    };
  }
}

/**
 * Get all subreddit pages for sitemap generation
 * This function is optimized for XML sitemap creation
 */
export async function getAllSubredditPagesForSitemap() {
  try {
    await connectDB();
    
    const pages = await SubredditPage.find({ status: 'published' })
      .select('slug updated_at')
      .sort({ updated_at: -1 })
      .lean();

    return {
      success: true,
      pages: pages.map(page => ({
        slug: page.slug,
        lastmod: page.updated_at,
        priority: 0.8,
        changefreq: 'weekly'
      }))
    };
  } catch (error) {
    console.error('Error fetching pages for sitemap:', error);
    return {
      success: false,
      pages: []
    };
  }
}
