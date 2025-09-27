import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import CTAButton from '../../components/CTAButton';

export default function Subreddit404() {
  return (
    <Layout>
      <Head>
        <title>Subreddit Page Not Found - Reddit Agency</title>
        <meta name="description" content="The subreddit page you're looking for doesn't exist. Explore our other subreddit guides and marketing resources." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary opacity-20 mb-4">404</div>
            <div className="text-6xl mb-4">🔍</div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Subreddit Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            The subreddit page you're looking for doesn't exist. 
            It might have been moved, deleted, or you may have entered an incorrect URL.
          </p>

          {/* Popular Subreddit Links */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Popular Subreddit Guides</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { slug: 'startup', label: 'Startups' },
                { slug: 'marketing', label: 'Marketing' },
                { slug: 'business', label: 'Business' },
                { slug: 'promotion', label: 'Promotion' },
                { slug: 'stock', label: 'Stock Trading' },
                { slug: 'launch', label: 'Product Launch' }
              ].map((link) => (
                <Link
                  key={link.slug}
                  href={`/subreddits/${link.slug}`}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary btn-lg">
              Go Home
            </Link>
            <CTAButton 
              text="Get Reddit Marketing Help"
              className="btn btn-accent btn-lg"
            />
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-4 bg-base-200 rounded-lg">
            <h3 className="font-semibold mb-2">Looking for something specific?</h3>
            <p className="text-sm text-gray-600">
              Try our <Link href="/" className="link link-primary">homepage</Link> or 
              <Link href="/twitter-marketing-agency" className="link link-primary ml-1">Twitter marketing services</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
