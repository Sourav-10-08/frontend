import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

    // Allow images from all external domains
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow all domains
        },
      ],
    },
};

export default nextConfig;
