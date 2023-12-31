// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    //apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      formAccess: process.env.WEB3FORMS_ACCESS_KEY
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
    '@formkit/nuxt',
  ],

  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },

  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  colorMode: {
    classSuffix: '',
  },

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  devtools: {
    enabled: true,
  },
})
