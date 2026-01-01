/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['@iconify/react', 'framer-motion'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Ensure proper transpilation
  transpilePackages: ['@lottiefiles/react-lottie-player'],
  // Disable static optimization for problematic pages if needed
  // But let's try without this first
};

module.exports = nextConfig;
