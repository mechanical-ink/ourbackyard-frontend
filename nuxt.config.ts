// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/libs/reset.css", "@/assets/css/index.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
  },
});
