/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["imgur.com", "i.imgur.com", "s2.glbimg.com"],
  },
};

module.exports = nextConfig;
