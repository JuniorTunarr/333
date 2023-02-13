/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  target: "serverless",
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  // ... whatever other config you might have
});
