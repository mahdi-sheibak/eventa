// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["fa", "en"],
    defaultLocale: "fa",
    strategy: "prefix_and_default",
  },
  routeRules: {
    "/": {
      ssr: true,
    },
    "/~": {
      redirect: "/today",
    },
    "/*/~": {
      redirect: "/today",
    },
    "/~/**": {
      isr: true,
    },
    "/*/~/**": {
      isr: true,
    },
  },
  experimental: {
    componentIslands: true,
  },
});
