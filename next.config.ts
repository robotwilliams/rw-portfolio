import type { NextConfig } from "next";

/**
 * Next.js Configuration
 *
 * This file configures the Next.js application with various settings for:
 * - Build optimization
 * - Image handling
 * - Performance settings
 * - Development features
 *
 * Current configuration is minimal but can be extended with:
 * - Image domains for external images
 * - Redirects and rewrites
 * - Environment variables
 * - Build optimizations
 */
const nextConfig: NextConfig = {
  /* config options here */
  // Enable experimental features if needed
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.js',
  //       },
  //     },
  //   },
  // },
  // Configure image domains for external images
  // images: {
  //   domains: ['example.com'],
  // },
  // Add redirects for legacy URLs
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-page',
  //       destination: '/new-page',
  //       permanent: true,
  //     },
  //   ];
  // },
  // Configure headers for security and performance
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
