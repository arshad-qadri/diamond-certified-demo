/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {    
        return [ {
          source: '/',
          has: [
            {
              type: 'host',
              value: '(?!www\\.)(.*)',
            },
          ],
          permanent: true,
          destination: 'https://www.diamondcertified.org/',
        },
          ]
      },
}

module.exports = nextConfig
