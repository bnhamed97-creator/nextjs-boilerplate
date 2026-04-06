import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mathoonshari.com" }],
        destination: "https://www.mathoonshari.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
