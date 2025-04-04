import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  basePath: '',
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  ...nextConfig,
  distDir: 'out',
});
