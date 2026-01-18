/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL || "https://securedo.sk",
  generateRobotsTxt: true, // generates robots.txt
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/api/*", "/_next/*"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
