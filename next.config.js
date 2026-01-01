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
    
    // Fix for framer-motion during server-side build
    if (isServer) {
      config.externals = config.externals || [];
      // Don't externalize framer-motion, but ensure it's handled properly
      config.resolve.alias = {
        ...config.resolve.alias,
        'framer-motion': path.resolve(__dirname, 'node_modules/framer-motion'),
      };
    }
    
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ensure proper transpilation
  transpilePackages: ['@lottiefiles/react-lottie-player', 'framer-motion'],
};

module.exports = nextConfig;
