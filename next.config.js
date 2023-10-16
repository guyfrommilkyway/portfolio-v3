module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  pageExtensions: ['page.tsx', 'tsx', 'ts'],
  reactStrictMode: true, // Include your Next.js configuration options here
};
