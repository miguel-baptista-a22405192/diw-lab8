/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deisishop.pythonanywhere.com",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
