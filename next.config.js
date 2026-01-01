/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Explicitly disable Turbopack to use Webpack (required for custom webpack config)
  turbopack: false,
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
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure proper transpilation
  transpilePackages: ['@lottiefiles/react-lottie-player', 'framer-motion'],
};

module.exports = nextConfig;
