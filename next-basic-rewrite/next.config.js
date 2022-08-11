/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source:
          '/:path*-:type([btl]{0,1}):year(\\d{4}):month(\\d{2}):day(\\d{2})(-?):id(\\d{4}).html',
        destination: '/news',
      },
      {
        source:
          '/:tagname-t:tagid(\\d+)',
        destination: '/tag',
      },
      {
        source:
          '/category/:slug',
        destination: '/seccion/:slug',
      },
    ]
  }
}

module.exports = nextConfig
