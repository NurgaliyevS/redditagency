const path = require('path');
const fs = require('fs');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://redditagency.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: true,
  outDir: "public",
};
