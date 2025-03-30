// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,

  app: {
    baseURL: "/svadba/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },

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

  swiper: {
    bundled: true,
    enableComposables: true,
    
  }
});
