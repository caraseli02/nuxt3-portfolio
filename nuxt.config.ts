// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@pinia/nuxt',
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

})
