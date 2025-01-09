import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: true,
  },

  images: {
    domains: ['picsum.photos','app.gitbook.com','files.gitbook.com'], // Allow images from picsum.photos
  },
};

export default nextConfig;
