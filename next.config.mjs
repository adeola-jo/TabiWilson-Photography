
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Lint runs explicitly before the build; Next 15 cannot serialize the flat config.
  eslint: { ignoreDuringBuilds: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
