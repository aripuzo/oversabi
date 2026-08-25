/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Legacy URLs from the previous site. Both are still in Google's index
      // with keyword-rich titles and both currently return 404 — this recovers
      // the authority pointing at them.
      { source: '/homepage', destination: '/', permanent: true },
      { source: '/homepage/:path*', destination: '/', permanent: true },

      // /pricing also still ranks ("how much to sew", "tailor price list").
      // Point it at the bespoke page until a real pricing page exists — then
      // change this destination to '/pricing' and delete this rule.
      { source: '/price-list', destination: '/bespoke', permanent: true },

      // Convenience aliases people type.
      { source: '/collection', destination: '/products', permanent: true },
      { source: '/shop', destination: '/products', permanent: true },
    ]
  },
}

module.exports = nextConfig
