import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint errors during build
    },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['res.cloudinary.com', 'i.imgur.com'], // Add any image domains you're using
    formats: ['image/avif', 'image/webp'],
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});


export default withMDX(
  nextConfig
);
