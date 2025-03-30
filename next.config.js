/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:8080', '0.0.0.0:8080', '127.0.0.1:8080']
    }
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    return config;
  }
};

module.exports = nextConfig;

 