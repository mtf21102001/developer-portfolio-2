// @ts-nocheck
import withPWA from "next-pwa";


/**
 * @type {import('next').NextConfig}
 */
const config = withPWA({
  reactStrictMode: true,

  // ✅ REQUIRED for Docker production
  output: "standalone",

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
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

