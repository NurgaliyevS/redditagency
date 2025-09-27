/**
 * ISR Configuration for RedditAgency.com
 * Based on PRD requirements for SEO-critical pSEO pages
 */

// ISR revalidation time (24 hours as specified in PRD)
export const ISR_REVALIDATE_TIME = 24 * 60 * 60; // 24 hours in seconds

// Fallback strategy for getStaticPaths
export const ISR_FALLBACK_STRATEGY = 'blocking'; // Enable ISR fallback

// ISR configuration object for getStaticProps
export const ISR_CONFIG = {
  revalidate: ISR_REVALIDATE_TIME,
  // Not setting fallback here as it's handled in getStaticPaths
};

// ISR configuration for getStaticPaths
export const ISR_PATHS_CONFIG = {
  fallback: ISR_FALLBACK_STRATEGY,
};

/**
 * Helper function to create ISR-enabled getStaticProps configuration
 * @param {Object} additionalProps - Additional props to merge with ISR config
 * @returns {Object} ISR-enabled configuration
 */
export function createISRProps(additionalProps = {}) {
  return {
    ...ISR_CONFIG,
    ...additionalProps
  };
}

/**
 * Helper function to create ISR-enabled getStaticPaths configuration
 * @param {Array} paths - Array of path objects
 * @returns {Object} ISR-enabled paths configuration
 */
export function createISRPaths(paths = []) {
  return {
    paths,
    ...ISR_PATHS_CONFIG
  };
}
