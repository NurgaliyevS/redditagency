import themes from "daisyui/src/theming/themes.js";

export const customConfigTwitter = {
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
  documentTitle: "Twitter Marketing Agency for Organic and Paid Growth",
  domainWithHttps: "https://redditagency.com/twitter-marketing-agency",
  seo: {
    description:
      "We help businesses grow on Twitter, generating millions in impressions through strategic marketing campaigns. Our content turns viral posts into paying customers.",
    themeColor: "#F3F4EF",
    applicationName: "redditagency",
    og: {
      title: "Twitter Marketing Agency for Organic and Paid Growth",
      url: "https://redditagency.com/twitter-marketing-agency",
      image: "https://redditagency.com/resultsTwitter/main.webp",
      imageAlt: "We help businesses grow on Twitter, generating millions in impressions through strategic marketing campaigns.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://redditagency.com/resultsTwitter/main.webp",
    },
  },
  blog: {
    title: "Twitter Agency Blog",
    description:
      "We help businesses grow on Twitter, generating millions in impressions through strategic marketing campaigns.",
    canonical: "https://redditagency.com/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I'm a Twitter marketing specialist who built my own business through viral content. I started this agency to help other businesses get real results on Twitter without wasting time on strategies that don't work.",
    },
  },
};
