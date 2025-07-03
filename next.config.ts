import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV;

const nextConfig: NextConfig = {
    basePath: isProd ? '/unnuo' : "",
    assetPrefix: isProd ? '/unnuo' : "",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
};

export default nextConfig;
