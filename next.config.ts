import type { NextConfig } from "next";

/*Add or modify according to your preference if you intend to use images of content from other website
then make sure to add them to the domains here*/

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here where you can change the basePath to suite the domain where you wnat to deploy*/
  basePath: isProd? '/dtailor' : '',
  devIndicators: {
    appIsrStatus: true,
  },

  images: {
    unoptimized: true,
    domains: ['picsum.photos','app.gitbook.com','files.gitbook.com'], // Allow images from picsum.photos
  },
  // output: 'export',
  distDir: 'dist',
};

export default nextConfig;
