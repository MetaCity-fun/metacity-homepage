// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
    loader: "imgix",
    path: "/",
    // loader: "imgix",
    // --- for build ---
    // path: "https://meta-city-homepage.vercel.app/",
    // --- for local ---
    // path: "http://localhost:3000/",
    // --- for dev ---
    // path: "https://dev.metacity.fun/",
    // --- for production ---
    // path: "https://metacity.fun/",
  },
};

module.exports = nextConfig;
