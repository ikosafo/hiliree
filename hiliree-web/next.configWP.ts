/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'hiliree.local',
        port: '',
        pathname: '/wordpress/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/wordpress/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;