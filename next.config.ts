import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['via.placeholder.com', 'plus.unsplash.com', 'cdn.pixabay.com', 'images.unsplash.com', 'randomuser.me'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
