/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Armonia-de-las-esferas',
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
