const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is to prevent useEffect triggering twice
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

module.exports = nextConfig
