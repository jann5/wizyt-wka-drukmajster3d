import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: '/wizyt-wka-drukmajster3d',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
