/* eslint-disable @typescript-eslint/no-var-requires */

// *********    Old configuration before PWA install   **********
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// }

// module.exports = nextConfig

// const withPWA = require('next-pwa')
// const isProd = process.env.NODE_ENV === 'production'

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     disable: !isProd
//   },
//   images: {
//     domains: ['media.graphcms.com']
//   }
// })

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: !process.env.NODE_ENV === 'production'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = withPWA(nextConfig)
