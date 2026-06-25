// @ts-nocheck
import withPWA from "next-pwa";


/**
 * @type {import('next').NextConfig}
 */
const config = withPWA({
  reactStrictMode: true,

  // ✅ REQUIRED for GitHub Pages static export
  output: "export",

  images: {
    unoptimized: true,
  },

  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "service-worker.js",
  },
});

export default config;

