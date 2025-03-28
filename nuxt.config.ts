// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,

  css: ["~/assets/css/main.scss"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    // '@nuxt/ui',
    // "@vuestic/nuxt",
    "@nuxt/scripts",
    "nuxt-swiper",
  ],
});