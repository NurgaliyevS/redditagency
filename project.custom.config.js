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
  documentTitle: "Reddit Marketing Agency for Organic and Paid Growth",
  domainWithHttps: "https://redditagency.com",
  seo: {
    description:
      "We help businesses grow on Reddit, generating millions in impressions through strategic marketing campaigns.",
    themeColor: "#F3F4EF",
    applicationName: "redditagency",
    og: {
      title: "Reddit Marketing Agency for Organic and Paid Growth",
      url: "https://redditagency.com",
      image: "https://redditagency.com/company_related/og-image.jpg",
      imageAlt: "We help businesses grow on Reddit, generating millions in impressions through strategic marketing campaigns.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://redditagency.com/company_related/og-image.jpg",
    },
  },
  blog: {
    title: "Reddit Agency Blog",
    description:
      "We help businesses grow on Reddit, generating millions in impressions through strategic marketing campaigns.",
    canonical: "https://redditagency.com/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am a founder and Reddit marketing expert. I created Reddit Agency to help businesses and entrepreneurs grow their presence on Reddit and drive meaningful traffic and customers to their websites.",
    },
  },
};
