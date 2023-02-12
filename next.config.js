/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
          publicExcludes: ["!robots.txt", "!sitemap.xml.gz"],
          swSrc: "service-worker.js",
        },
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig
);
