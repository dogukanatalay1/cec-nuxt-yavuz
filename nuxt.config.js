export default {
  head: {
    title: 'cec-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [
    '@/assets/scss/colors.scss',
    '@/assets/css/bootstrap.min.css',
    // '@/assets/scss/components/EventCard.scss',
    '@/assets/scss/main.scss'
  ],

  plugins: [{ src: '~/plugins/api.js' }, { src: '~/plugins/axios.js' }],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    '@nuxtjs/auth-next'
  ],

  auth: {
    // Options
  },

  env: {
    BASE_URL: process.env.BASE_URL,
    BROWSER_BASE_URL: process.env.BROWSER_BASE_URL
  },

  compilerOptions: {
    types: ['@nuxtjs/auth-next']
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://ktucectest.herokuapp.com/api/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
