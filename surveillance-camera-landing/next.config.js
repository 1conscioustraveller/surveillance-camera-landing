// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'prod.spline.design'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod.spline.design',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/#products',
        permanent: true,
      },
      {
        source: '/features',
        destination: '/#features',
        permanent: true,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Custom webpack config
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    // Only enable in development for better debugging
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }

    return config;
  },
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://securevision.example.com' 
      : 'http://localhost:3000',
    SPLINE_SCENE_URL: 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode',
  },
  // Enable static exports for standalone deployment
  output: 'standalone',
  // Optional: Enable trailing slashes for better SEO
  trailingSlash: false,
  // Optional: Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

// Bundle analyzer configuration (optional)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)



//Alternative simplified version:
//js
// next.config.js (simplified)
/** @type {import('next').NextConfig} */
//const nextConfig = {
  //images: {
    //domains: ['images.unsplash.com', 'prod.spline.design'],
  //},
  //compiler: {
    //removeConsole: process.env.NODE_ENV === 'production',
  //},
  //poweredByHeader: false,
  //reactStrictMode: true,
  //swcMinify: true,
  //async headers() {
    //return [
      //{
        //source: '/(.*)',
        //headers: [
          //{
            //key: 'X-Content-Type-Options',
            //value: 'nosniff'
          //},
          //{
            //key: 'X-Frame-Options',
            //value: 'DENY'
          //}
        //],
      //}
    //]
  //},
  //env: {
    //SPLINE_SCENE_URL: 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode',
  //},
//}

//module.exports = nextConfig
//Key Features of This Next.js Config
//Image Optimization: Configures Next.js Image component for Unsplash and Spline URLs

//Security Headers: Adds security headers for XSS protection, clickjacking prevention, etc.

//Performance Optimizations:

//SWC minification for faster builds

//Console removal in production

//Compression enabled

//Environment Variables: Sets environment-specific variables

//Redirects: Configures URL redirects for better user experience

//Webpack Configuration: Custom webpack rules for additional file types

//Bundle Analysis: Optional bundle analyzer integration

//Image Optimization
//The image configuration allows Next.js to optimize images from:

//Unsplash (for product images)

//Spline (for the 3D robot component)

//Security Headers
//The security headers provide:

//X-Content-Type-Options: nosniff - Prevents MIME type sniffing

//X-Frame-Options: DENY - Prevents clickjacking

//X-XSS-Protection - Enables XSS protection

//Referrer-Policy - Controls referrer information

//Environment Variables
//The config exposes environment variables to the browser:

//SITE_URL - Different values for development and production

//SPLINE_SCENE_URL - URL for the 3D robot scene
