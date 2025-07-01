import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
    experimental: {
    appDir: true,
  },
};


export default nextConfig;
