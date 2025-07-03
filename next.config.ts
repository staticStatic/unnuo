import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/unnuo',
    images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
};

export default nextConfig;
