import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: true,
  },

  images: {
    domains: ['picsum.photos'], // Allow images from picsum.photos
  },
};

export default nextConfig;
