import glsl from "vite-plugin-glsl";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-05",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/icon", "@nuxtjs/fontaine", "@nuxt/image"],
  routeRules: {
    "/": {
      ssr: true,
    },
    "/today": {
      ssr: true,
    },
  },
  experimental: {
    componentIslands: true,
  },
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    plugins: [glsl(), tailwindcss() as any],
    optimizeDeps: {
      include: ["ogl"],
    },
  },
  css: ["./app/styles/main.css"],
});
