import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  domainName: "redditagency.com",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `Reddit Agency <noreply@mg.redditagency.com>`,
    fromAdmin: `Reddit Agency <admin@mg.redditagency.com>`,
    supportEmail: "nurgasab@gmail.com",
    forwardRepliesTo: "nurgasab@gmail.com",
  },
  documentTitle: "The #1 Reddit Marketing Agency for ChatGPT & Google Ranking",
  domainWithHttps: "https://redditagency.com",
  seo: {
    description:
      "We make content that ranks on ChatGPT and Google. Our Reddit marketing turns viral posts into paying customers.",
    themeColor: "#F3F4EF",
    applicationName: "redditagency",
    og: {
      title: "The #1 Reddit Marketing Agency for ChatGPT & Google Ranking",
      url: "https://redditagency.com",
      image: "https://redditagency.com/company_related/og-image.jpg",
      imageAlt:
        "We make content that ranks on ChatGPT and Google. Our Reddit marketing turns viral posts into paying customers.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://redditagency.com/company_related/og-image.jpg",
    },
  },
  blog: {
    title: "Reddit Agency Blog",
    description:
      "We make content that ranks on ChatGPT and Google. Our marketing drives customers through Reddit",
    canonical: "https://redditagency.com/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am a founder and Reddit marketing expert. I created Reddit Agency to help businesses and entrepreneurs grow their presence on Reddit and drive meaningful traffic and customers to their websites.",
    },
  },
};
