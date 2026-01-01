/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['@iconify/react'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Ensure proper module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    
    return config;
  },
  // Ensure proper transpilation
  transpilePackages: ['@lottiefiles/react-lottie-player'],
  // Disable static page generation for debugging
  // output: 'export', // Uncomment if you want static export
};

module.exports = nextConfig;
