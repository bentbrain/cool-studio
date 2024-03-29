import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/contact", "/contact/thanks"],
    },
  },
  modules: ["@nuxt/content"],
  build: {
    transpile: ['moment'],
  },
});
