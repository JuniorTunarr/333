/** @type {import('next').NextConfig} */
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
        },
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig
);
