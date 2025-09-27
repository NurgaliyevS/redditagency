import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CTAButton from "../../components/CTAButton";
import {
  getSubredditPageData,
  getAllSubredditPageSlugs,
} from "../../lib/getSubredditPageData.js";
import { createISRProps, createISRPaths } from "../../lib/isrConfig.js";

export default function SubredditPage({ pageData, error, slug }) {
  const router = useRouter();

  // Handle loading state during ISR rebuild
  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </Layout>
    );
  }

  // Handle error state
  if (error || !pageData) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The subreddit page you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push("/")}
              className="btn btn-primary"
            >
              Go Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{pageData.title_tag}</title>
        <meta name="description" content={pageData.meta_description} />
        <meta
          property="og:title"
          content={pageData.seo_data?.og_title || pageData.title_tag}
        />
        <meta
          property="og:description"
          content={
            pageData.seo_data?.og_description || pageData.meta_description
          }
        />
        <meta
          property="og:image"
          content={
            pageData.seo_data?.og_image ||
            "https://redditagency.com/company_related/og-image.jpg"
          }
        />
        <meta
          property="og:url"
          content={
            pageData.seo_data?.canonical_url ||
            `https://redditagency.com/subreddits/${pageData.slug || slug}`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={pageData.seo_data?.twitter_title || pageData.title_tag}
        />
        <meta
          name="twitter:description"
          content={
            pageData.seo_data?.twitter_description || pageData.meta_description
          }
        />
        <meta
          name="twitter:image"
          content={
            pageData.seo_data?.twitter_image ||
            "https://redditagency.com/company_related/og-image.jpg"
          }
        />
        <link
          rel="canonical"
          href={
            pageData.seo_data?.canonical_url ||
            `https://redditagency.com/subreddits/${pageData.slug || slug}`
          }
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-16 pb-8">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                {pageData.h1}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                {pageData.intro}
              </p>
              <div className="flex justify-center">
                <CTAButton text={pageData.cta_text} />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="pb-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Card - Subreddit Rankings */}
              <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow lg:col-span-2">
                <div className="flex flex-col mb-6">
                  <h3 className="text-2xl font-bold italic text-gray-900 mb-4">
                    {pageData.keyword.charAt(0).toUpperCase() +
                      pageData.keyword.slice(1)}{" "}
                    community rankings
                  </h3>
                  <div className="text-sm text-gray-600 border-t border-gray-200 pt-4">
                    The most relevant subreddits for {pageData.keyword}
                  </div>
                </div>

                <div className="space-y-2">
                  {pageData.subreddits.map((subreddit, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 text-gray-400 rounded-full text-sm">
                          #{index + 1}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gray-100">
                            <img
                              src={`/icons/${subreddit.name.replace("r/", "").toLowerCase()}.webp`}
                              alt={`${subreddit.name} community icon`}
                              className="w-full h-full object-cover rounded-lg"
                              loading="lazy"
                              onError={(e) => {
                                // Fallback to Reddit-style icon if icon doesn't exist
                                e.target.style.display = "none";
                                e.target.nextElementSibling.style.display =
                                  "flex";
                              }}
                            />
                            <div
                              className="w-full h-full rounded-lg flex items-center justify-center"
                              style={{ display: "none" }}
                            >
                              <div className="w-full h-full bg-gray-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-medium">
                                  r/
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {subreddit.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {subreddit.member_count?.toLocaleString()} members
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          href={`https://reddit.com/${subreddit.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2.5 py-1 text-gray-600 hover:text-orange-500 hover:bg-orange-50 text-xs font-medium rounded border border-gray-200 hover:border-orange-200 transition-all duration-200"
                        >
                          View on Reddit
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card - Topics & Insights */}
              <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold italic text-gray-900 mb-4">
                  Similar Topics
                </h3>

                <div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
                  {[
                    "business", 
                    "marketing",
                    "startup",
                    "promotion",
                    "sales",
                  ]
                  .filter(keyword => keyword !== pageData.keyword)
                  .slice(0, 8)
                  .map((keyword, index) => (
                    <a
                      key={index}
                      href={`/subreddits/${keyword}`}
                      className="flex items-center justify-between w-full p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200 hover:shadow-md group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-700 transition-colors">
                          {index + 1}
                        </div>
                        <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                          {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-xs font-medium">Explore</span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Stats on {pageData.keyword} subreddits
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {pageData.subreddits
                          .reduce(
                            (sum, sub) => sum + (sub.member_count || 0),
                            0
                          )
                          .toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Total Members</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {pageData.subreddits.length}
                      </div>
                      <div className="text-sm text-gray-600">
                        Active Communities
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center flex items-center flex-col">
                    <p className="text-sm text-gray-600 mb-4">
                      Need help with Reddit marketing?
                    </p>
                    <CTAButton 
                      text="Get Expert Help"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700 py-12">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-white">
              {pageData.cta_section?.title || "Do you need help with Reddit marketing?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {pageData.cta_section?.description || "Our Reddit marketing experts can help you navigate these communities effectively and build a strong presence that drives real results for your business."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton children={pageData.cta_section?.button_text || "Start Your Reddit Campaign"} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// ISR-enabled getStaticProps with 24-hour revalidation
export async function getStaticProps({ params }) {
  try {
    const { slug } = params;

    // Check if database connection is available
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI not configured, returning not found");
      return createISRProps({
        props: {
          pageData: null,
          error: "Database not configured",
        },
        notFound: true,
      });
    }

    const result = await getSubredditPageData(slug);

    // Handle null result (database connection issues)
    if (!result) {
      return createISRProps({
        props: {
          pageData: null,
          error: "Database connection failed",
        },
        notFound: true,
      });
    }

    if (!result.success || !result.data) {
      return createISRProps({
        props: {
          pageData: null,
          error: result.error || "Page not found",
        },
        notFound: true,
      });
    }

    return createISRProps({
      props: {
        pageData: result.data,
        error: null,
        slug: slug,
      },
    });
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return createISRProps({
      props: {
        pageData: null,
        error: "Failed to load page data",
      },
      notFound: true,
    });
  }
}

// ISR-enabled getStaticPaths with blocking fallback
export async function getStaticPaths() {
  try {
    const result = await getAllSubredditPageSlugs();

    if (!result.success) {
      console.error("Error getting static paths:", result.error);
      return createISRPaths([]);
    }

    return createISRPaths(result.paths);
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return createISRPaths([]);
  }
}
