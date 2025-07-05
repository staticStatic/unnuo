import type { NextConfig } from "next";

const isProd = !process.env.CODESPACE_NAME;

const nextConfig: NextConfig = {
    basePath: isProd ? '/unnuo' : '',
//    assetPrefix: isProd ? '/unnuo' : "",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
};

export default nextConfig;
