/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Homepage",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/Homepage',
      },
    ];
  },
}

module.exports = nextConfig
