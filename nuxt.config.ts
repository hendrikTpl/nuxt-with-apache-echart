// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt3 with Apache Echart starter',
      htmlAttrs: {
        lang: 'en'
      },

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    },
  },

  modules: [],
  ssr: true,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  plugins: [],

  build: {
    transpile: ['vuetify', 'echarts', 'zrender', 'tslib'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3010,
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    },
  },

  compatibilityDate: '2024-08-11'
})