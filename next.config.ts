import type { NextConfig } from "next";

const isDev = !!process.env.CODESPACE_NAME;

const nextConfig: NextConfig = {
    basePath: isDev ? '' : '/unnuo',
    assetPrefix: isDev ? '' : '/unnuo',
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
};

export default nextConfig;
