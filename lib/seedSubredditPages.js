import connectDB from "./mongodb.js";
import SubredditPage from "../models/SubredditPage.js";

// Seed data for Tier 1 keywords
const seedData = [
  {
    keyword: "sales",
    slug: "sales",
    title_tag: "Best Sales Subreddits - Reddit Communities for Sales",
    meta_description:
      "Find the best Reddit communities for sales. Connect with sales professionals, get sales advice, and share your sales strategies and techniques.",
    h1: "Subreddits for Sales",
    intro:
      "Looking to improve your sales skills or grow your sales career? These Reddit communities offer sales strategies, techniques, and a supportive community to help you succeed in sales.",
    cta_text: "Boost Your Sales on Reddit",
    cta_section: {
      title: "Do you need help with Reddit marketing for your sales?",
      description:
        "Our Reddit marketing experts can help you navigate these sales communities effectively and build a strong presence that drives real results for your sales growth.",
      button_text: "Start Your Reddit Sales Campaign",
    },
     subreddits: [
       {
         name: "r/buildapcsales",
         description:
           "Find deals on PC components, hardware, and computer accessories for building custom systems",
         member_count: 972000,
         category: "Computers & Hardware",
       },
       {
         name: "r/Sales_Professionals",
         description:
           "Connect with sales professionals, share sales strategies, and get advice on closing deals and building relationships",
         member_count: 715000,
         category: "Career",
       },
       {
         name: "r/sales",
         description:
           "Discuss sales techniques, share success stories, and learn from experienced sales professionals",
         member_count: 510000,
         category: "Business news & discussion",
       },
       {
         name: "r/preppersales",
         description:
           "Find deals on survival gear, emergency supplies, and prepping equipment for preparedness",
         member_count: 49700,
         category: "Career",
       },
       {
         name: "r/salestechniques",
         description:
           "Learn advanced sales techniques, objection handling, and closing strategies from sales experts",
         member_count: 41800,
         category: "Career",
       },
       {
         name: "r/techsales",
         description:
           "Discuss technology sales strategies, SaaS selling, and B2B tech sales techniques",
         member_count: 38000,
         category: "Career",
       },
       {
         name: "r/LabGroupSales",
         description:
           "Find deals on laboratory equipment, scientific instruments, and research supplies",
         member_count: 32000,
         category: "Deals & Marketplace",
       },
       {
         name: "r/CarSalesTraining",
         description:
           "Learn automotive sales techniques, customer service skills, and dealership sales strategies",
         member_count: 15700,
         category: "Career",
       },
       {
         name: "r/b2b_sales",
         description:
           "Master B2B sales strategies, enterprise selling, and business-to-business relationship building",
         member_count: 13500,
         category: "Startups & Entrepreneurship",
       },
       {
         name: "r/SalesOperations",
         description:
           "Optimize sales processes, CRM management, and sales operations strategies for better performance",
         member_count: 7700,
         category: "Creators & Influencers",
       },
       {
         name: "r/RoofingSales",
         description:
           "Learn roofing sales techniques, home improvement selling, and construction sales strategies",
         member_count: 5900,
         category: "Career",
       },
     ],
    seo_data: {
      canonical_url: "https://redditagency.com/subreddits/sales",
      og_title: "Best Sales Subreddits - Reddit Communities for Sales",
      og_description:
        "Find the best Reddit communities for sales. Connect with sales professionals, get sales advice, and share your sales strategies and techniques.",
      og_image: "https://redditagency.com/company_related/og-image.jpg",
      twitter_title:
        "Best Sales Subreddits - Reddit Communities for Sales",
      twitter_description:
        "Find the best Reddit communities for sales. Connect with sales professionals, get sales advice.",
      twitter_image: "https://redditagency.com/company_related/og-image.jpg",
    },
  },
  {
    keyword: "promotion",
    slug: "promotion",
    title_tag: "Best Promotion Subreddits - Reddit Communities for Promotion",
    meta_description:
      "Find the best Reddit communities for promotion. Connect with creators, get promotion advice, and share your promotional content effectively.",
    h1: "Subreddits for Promotion",
    intro:
      "Looking to promote your content or business? These Reddit communities offer promotion strategies, audience engagement tips, and a supportive community to help you succeed in promoting your work.",
    cta_text: "Boost Your Promotion on Reddit",
    cta_section: {
      title: "Do you need help with Reddit promotion for your content?",
      description:
        "Our Reddit promotion experts can help you navigate these communities effectively and build a strong promotional presence that drives real engagement and visibility for your content.",
      button_text: "Start Your Reddit Promotion Campaign",
    },
    subreddits: [
      {
        name: "r/SideProject",
        description:
          "Showcase side projects, get feedback, and connect with other developers and entrepreneurs",
        member_count: 496000,
        category: "Programming",
      },
       {
         name: "r/AppIdeas",
         description:
           "Share app concepts, get feedback on mobile app ideas, and connect with app developers",
         member_count: 56000,
         category: "Software & Apps",
       },
      {
        name: "r/MusicPromotion",
        description:
          "Share and promote your music tracks, albums, and musical content to reach new audiences",
        member_count: 54500,
        category: "Music News & Discussion",
      },
      {
        name: "r/SelfPromotionYouTube",
        description:
          "Promote your YouTube videos, channels, and content to grow your subscriber base",
        member_count: 32900,
        category: "Creators & Influencers",
      },
      {
        name: "r/YoutubePromotionn",
        description:
          "Share YouTube content, get feedback, and promote videos to increase views and engagement",
        member_count: 21700,
        category: "Creators & Influencers",
      },
       {
         name: "r/IMadeThis",
         description:
           "Share DIY projects, crafts, and creative works you've made with the community",
         member_count: 19200,
         category: "DIY & Crafts",
       },
      {
        name: "r/startups_promotion",
        description:
          "Promote your startup, product launches, and business ventures to potential customers and investors",
        member_count: 15800,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/BookPromotion",
        description:
          "Promote your books, novels, and literary works to readers and book enthusiasts",
        member_count: 6000,
        category: "Books & Literature",
      },
       {
         name: "r/SocialMediaPromotion",
         description:
           "Share social media content, promote posts, and grow your social media presence across platforms",
         member_count: 4600,
         category: "Creators & Influencers",
       },
    ],
    seo_data: {
      canonical_url: "https://redditagency.com/subreddits/promotion",
      og_title: "Best Promotion Subreddits - Reddit Communities for Promotion",
      og_description:
        "Find the best Reddit communities for promotion. Connect with creators, get promotion advice, and share your promotional content effectively.",
      og_image: "https://redditagency.com/company_related/og-image.jpg",
      twitter_title:
        "Best Promotion Subreddits - Reddit Communities for Promotion",
      twitter_description:
        "Find the best Reddit communities for promotion. Connect with creators, get promotion advice.",
      twitter_image: "https://redditagency.com/company_related/og-image.jpg",
    },
  },
  {
    keyword: "business",
    slug: "business",
    title_tag: "Best Business Subreddits - Reddit Communities for Business",
    meta_description:
      "Find the best Reddit communities for business. Connect with entrepreneurs, get business advice, and share your business journey.",
    h1: "Subreddits for Business",
    intro:
      "Looking to grow your business? These Reddit communities offer business insights, growth strategies, and a supportive community to help you succeed in business.",
    cta_text: "Grow Your Business on Reddit",
    cta_section: {
      title: "Do you need help with Reddit marketing for your business?",
      description:
        "Our Reddit marketing experts can help you navigate these business communities effectively and build a strong presence that drives real results for your business growth.",
      button_text: "Start Your Reddit Business Campaign",
    },
    subreddits: [
      {
        name: "r/Entrepreneur",
        description:
          "Community for entrepreneurs to share business ideas and get feedback",
        member_count: 4900000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/Business",
        description:
          "Community for business professionals to share business insights and get advice",
        member_count: 2500000,
        category: "Business News & Discussion",
      },
      {
        name: "r/smallbusiness",
        description:
          "Discuss small business operations, challenges, and growth strategies",
        member_count: 2200000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/startups",
        description: "Discuss startup ideas, funding, and growth strategies",
        member_count: 1900000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/Business_Ideas",
        description:
          "Share and discuss innovative business ideas and opportunities",
        member_count: 378000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/BusinessIntelligence",
        description:
          "Discuss business analytics, data insights, and intelligence strategies",
        member_count: 207000,
        category: "Career",
      },
      {
        name: "r/artbusiness",
        description:
          "Discuss business strategies for artists and creative entrepreneurs",
        member_count: 107000,
        category: "Business News & Discussion",
      },
      {
        name: "r/IndiaBusiness",
        description:
          "Discuss business opportunities and strategies in the Indian market",
        member_count: 71500,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/RedditforBusiness",
        description:
          "Learn how to use Reddit effectively for business growth and engagement",
        member_count: 35100,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/small_business_ideas",
        description:
          "Share creative small business concepts and entrepreneurial opportunities",
        member_count: 24500,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/Businessideas",
        description:
          "Explore innovative business concepts and entrepreneurial ventures",
        member_count: 24400,
        category: "Startups & Entrepreneurship",
      },
    ],
    seo_data: {
      canonical_url: "https://redditagency.com/subreddits/business",
      og_title: "Best Business Subreddits - Reddit Communities for Business",
      og_description:
        "Find the best Reddit communities for business. Connect with entrepreneurs, get business advice, and share your business journey.",
      og_image: "https://redditagency.com/company_related/og-image.jpg",
      twitter_title:
        "Best Business Subreddits - Reddit Communities for Business",
      twitter_description:
        "Find the best Reddit communities for business. Connect with entrepreneurs, get business advice.",
      twitter_image: "https://redditagency.com/company_related/og-image.jpg",
    },
  },
  {
    keyword: "marketing",
    slug: "marketing",
    title_tag: "Best Marketing Subreddits - Reddit Communities for Marketers",
    meta_description:
      "Find the best Reddit communities for marketing. Connect with marketers, get marketing advice, and share your marketing journey.",
    h1: "Subreddits for Marketing",
    intro:
      "Looking to grow your marketing skills? These Reddit communities offer marketing insights, campaign strategies, and a supportive community to help you succeed in marketing.",
    cta_text: "Grow Your Marketing on Reddit",
    cta_section: {
      title: "Do you need help with Reddit marketing?",
      description:
        "Our Reddit marketing experts can help you navigate these marketing communities effectively and build a strong presence that drives real results for your marketing campaigns.",
      button_text: "Start Your Reddit Marketing Campaign",
    },
    subreddits: [
      {
        name: "r/Marketing",
        description:
          "Community for marketers to share marketing ideas and get feedback",
        member_count: 1900000,
        category: "Career",
      },
      {
        name: "r/digital_marketing",
        description: "Discuss digital marketing ideas and get feedback",
        member_count: 298000,
        category: "Stuyding & education",
      },
      {
        name: "r/DigitalMarketing",
        description: "Learn digital marketing strategies, online advertising, and digital campaign optimization",
        member_count: 280000,
        category: "Career",
      },
      {
        name: "r/Affiliatemarketing",
        description:
          "Discuss affiliate marketing strategies, programs, and monetization tactics",
        member_count: 244000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/advertising",
        description:
          "Discuss advertising campaigns, creative strategies, and media planning",
        member_count: 217000,
        category: "Career",
      },
      {
        name: "r/SocialMediaMarketing",
        description: "Discuss social media marketing ideas and get feedback",
        member_count: 209000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/content_marketing",
        description:
          "Share content marketing strategies, creation tips, and engagement techniques",
        member_count: 155000,
        category: "Career",
      },
      {
        name: "r/AskMarketing",
        description:
          "Get answers to marketing questions and share marketing expertise",
        member_count: 96400,
        category: "Career",
      },
      {
        name: "r/Emailmarketing",
        description:
          "Learn email marketing best practices, automation, and campaign optimization",
        member_count: 94100,
        category: "Career",
      },
      {
        name: "r/MarketingMentor",
        description:
          "Find marketing mentors and learn from experienced marketing professionals",
        member_count: 70800,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/SEO_Digital_Marketing",
        description:
          "Learn SEO techniques and digital marketing optimization strategies",
        member_count: 59600,
        category: "Business News & Discussion",
      },
      {
        name: "r/MarketingAutomation",
        description:
          "Explore marketing automation tools, workflows, and implementation strategies",
        member_count: 47200,
        category: "Business News & Discussion",
      },
      {
        name: "r/MarketingGeek",
        description:
          "Deep dive into advanced marketing tactics and data-driven strategies",
        member_count: 24000,
        category: "Career",
      },
      {
        name: "r/ContentMarketing",
        description:
          "Master content marketing strategies and storytelling techniques",
        member_count: 20100,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/MarketingHelp",
        description:
          "Get marketing assistance and learn from marketing community experts",
        member_count: 19800,
        category: "Career",
      },
      {
        name: "r/ProductMarketing",
        description:
          "Learn product marketing strategies, positioning, and go-to-market tactics",
        member_count: 20900,
        category: "Career",
      },
    ],
    seo_data: {
      canonical_url: "https://redditagency.com/subreddits/marketing",
      og_title: "Best Marketing Subreddits - Reddit Communities for Marketers",
      og_description:
        "Find the best Reddit communities for marketing. Connect with marketers, get marketing advice, and share your marketing journey.",
      og_image: "https://redditagency.com/company_related/og-image.jpg",
      twitter_title:
        "Best Marketing Subreddits - Reddit Communities for Marketers",
      twitter_description:
        "Find the best Reddit communities for marketing. Connect with marketers, get marketing advice.",
      twitter_image: "https://redditagency.com/company_related/og-image.jpg",
    },
  },
  {
    keyword: "startup",
    slug: "startup",
    title_tag: "Best Startup Subreddits - Reddit Communities for Entrepreneurs",
    meta_description:
      "Find the best Reddit communities for startup. Connect with entrepreneurs, get funding advice, and share your startup journey.",
    h1: "Subreddits for Startup",
    intro:
      "Launching a startup? These Reddit communities offer startup resources, funding advice, and a supportive community to help you grow your startup.",
    cta_text: "Grow Your Startup on Reddit",
    cta_section: {
      title: "Do you need help with Reddit marketing for your startup?",
      description:
        "Our Reddit marketing experts can help you navigate these startup communities effectively and build a strong presence that drives real results for your startup growth and funding.",
      button_text: "Start Your Reddit Startup Campaign",
    },
    subreddits: [
      {
        name: "r/Entrepreneur",
        description:
          "Community for entrepreneurs to share business ideas and get feedback",
        member_count: 4900000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/startups",
        description: "Discuss startup ideas, funding, and growth strategies",
        member_count: 1900000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/EntrepreneurRideAlong",
        description: "Discuss real life startup experiences and challenges",
        member_count: 612000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/SaaS",
        description: "Discuss SaaS products, marketing, and growth strategies",
        member_count: 480000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/StartUpIndia",
        description: "Discuss startup in India, funding, and growth strategies",
        member_count: 365000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/startup",
        description: "General startup discussions and advice",
        member_count: 235000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/ycombinator",
        description: "Connect with Y Combinator startups, alumni, and discuss accelerator experiences",
        member_count: 145000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/Startup_Ideas",
        description: "Share innovative startup concepts, validate ideas, and get feedback from entrepreneurs",
        member_count: 125000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/indianstartups",
        description:
          "Connect with Indian startup ecosystem, discuss funding opportunities, and share startup experiences in India",
        member_count: 80200,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/startup_resources",
        description:
          "Find startup tools, resources, templates, and guides to help build your startup",
        member_count: 26000,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/StartupAccelerators",
        description:
          "Learn about startup accelerators, incubators, and funding programs worldwide",
        member_count: 25100,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/startupideas",
        description: "Share creative startup concepts, brainstorm ideas, and get validation from the community",
        member_count: 14800,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/StartupDACH",
        description: "Connect with startups in Germany, Austria, and Switzerland startup ecosystem",
        member_count: 13200,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/StartupLaunches",
        description: "Announce new startup launches, product releases, and celebrate startup milestones",
        member_count: 3400,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/startup_funding",
        description: "Learn about startup funding options, venture capital, and investment strategies",
        member_count: 1600,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/StartupTips",
        description: "Share practical startup advice, tips, and lessons learned from startup experiences",
        member_count: 241,
        category: "Startups & Entrepreneurship",
      },
      {
        name: "r/StartupFeedback",
        description:
          "Get feedback on startup ideas, products, and business plans from experienced entrepreneurs",
        member_count: 769,
        category: "Startups & Entrepreneurship",
      },
    ],
    seo_data: {
      canonical_url: "https://redditagency.com/subreddits/startup",
      og_title:
        "Best Startup Subreddits - Reddit Communities for Entrepreneurs",
      og_description:
        "Find the best Reddit communities for startups. Connect with entrepreneurs, get funding advice, and share your startup journey.",
      og_image: "https://redditagency.com/company_related/og-image.jpg",
      twitter_title:
        "Best Startup Subreddits - Reddit Communities for Entrepreneurs",
      twitter_description:
        "Find the best Reddit communities for startups. Connect with entrepreneurs, get funding advice.",
      twitter_image: "https://redditagency.com/company_related/og-image.jpg",
    },
  }
];

export async function seedSubredditPages() {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    // Clear existing data (optional - remove this if you want to keep existing data)
    await SubredditPage.deleteMany({});
    console.log("Cleared existing subreddit pages");

    // Insert seed data
    const result = await SubredditPage.insertMany(seedData);
    console.log(`Successfully seeded ${result.length} subreddit pages`);

    return result;
  } catch (error) {
    console.error("Error seeding subreddit pages:", error);
    throw error;
  }
}

// Function to run seeding if this file is executed directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  seedSubredditPages()
    .then(() => {
      console.log("Seeding completed successfully");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seeding failed:", error);
      process.exit(1);
    });
}
