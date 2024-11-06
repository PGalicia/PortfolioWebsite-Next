const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is to prevent useEffect triggering twice
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  async headers() {
    return [
      {
        source: '/images/portrait.png',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/png'
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
