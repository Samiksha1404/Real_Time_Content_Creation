/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
     distDir: "build",
     output: "export",
  }

  module.exports = nextConfig