/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React Strict Mode for identifying potential problems
    swcMinify: true, // Enables faster builds with SWC compiler
    // images: {
    //   domains: ["example.com"], // Add your trusted image domains
    // },
    experimental: {
      appDir: true, // If you're using the new App Directory (Next.js 13+)
    },
  };
  
  export default nextConfig;
  