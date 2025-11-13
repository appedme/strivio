import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dashboard/analytics",
        destination: "https://studio.youtube.com/analytics",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
