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
          destination: 'https://www.diamond-certified-demo.vercel.app/',
        },
          ]
      },
}

module.exports = nextConfig
