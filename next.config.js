/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html'
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: '/home',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig
