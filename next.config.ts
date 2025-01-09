import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: true,
  },

  images: {
    unoptimized: true,
    domains: ['picsum.photos','app.gitbook.com','files.gitbook.com'], // Allow images from picsum.photos
  },
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
