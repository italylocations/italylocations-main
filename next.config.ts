import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev',
        pathname: '/main-site/**',
      },
    ],
  },
};

export default nextConfig;
