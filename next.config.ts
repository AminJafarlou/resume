const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/resume/' : '',
  basePath: isProd ? '/resume' : '',
  output: 'export',
}

export default nextConfig
