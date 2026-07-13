import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "site-static",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
