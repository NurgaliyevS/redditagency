import Head from "next/head";
import { customConfigTwitter } from "@/project.custom.config.twitter";

export default function SEOTwitter() {
  return (
    <Head>
      <title>{customConfigTwitter.documentTitle}</title>
      <meta name="description" content={customConfigTwitter.seo.description} />
      <meta name="theme-color" content={customConfigTwitter.seo.themeColor} />
      <meta name="application-name" content={customConfigTwitter.seo.applicationName} />
      <meta name="google-site-verification" content="otDrtjjkuCozwcOzSQ1oXZ7Ipz_vr9uBHlZKnl0iCSg" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={customConfigTwitter.seo.og.url} />
      <meta property="og:title" content={customConfigTwitter.seo.og.title} />
      <meta property="og:description" content={customConfigTwitter.seo.description} />
      <meta property="og:image" content={customConfigTwitter.seo.og.image} />
      <meta property="og:image:alt" content={customConfigTwitter.seo.og.imageAlt} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={customConfigTwitter.seo.og.twitterSite} />
      <meta name="twitter:title" content={customConfigTwitter.seo.og.title} />
      <meta name="twitter:description" content={customConfigTwitter.seo.description} />
      <meta name="twitter:image" content={customConfigTwitter.seo.og.twitterImage} />
      
      <link rel="canonical" href={customConfigTwitter.domainWithHttps} />
    </Head>
  );
}