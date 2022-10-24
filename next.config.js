/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp", "image/avif"],
    domains: ["i.imgur.com"],
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
}

module.exports = nextConfig
