/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/glossa-app/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/glossa-app' : '',
  }
  
  export default nextConfig