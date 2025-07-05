import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";
import Configuration = webpack.Configuration;

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.whythe.app",
      },
    ],
  },

  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
