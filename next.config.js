/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["imgur.com", "i.imgur.com", "s2.glbimg.com", "i.pinimg.com"],
  },
  optimizeFonts: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
};

module.exports = nextConfig;
