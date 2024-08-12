import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

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
        { hid: 'description', name: 'description', content: 'Nuxt 3 tutorial using ECharts and Vuetify' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    },
  },
  modules: [
    "nuxt-echarts",
  ],
  ssr: true,
  echarts: {
    // Options https://echarts.nuxt.dev/getting-started/configuration
    renderer: ['svg', 'canvas'],
    charts: ['BarChart', 'LineChart', 'PieChart', 'GaugeChart'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent', 'ToolboxComponent'],
    features: ['LabelLayout', 'UniversalTransition'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css",
  ],
  build: {
    transpile: ['vuetify']
  },
  // devtools: { 
  //   enabled: true, 
  //   // enabled: process.env.NODE_ENV === 'development'
  // },
  devServer: {
    host: '0.0.0.0',
    port: 3010,
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    },
  },
  compatibilityDate: '2024-04-03',

})
