export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'dentistry',
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
      }
    ],
    htmlAttrs: {
      lang: 'zh-hk'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0, user-scalable=0' }
    ],
    link: [
      { rel: 'stylesheet',  href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/WebsiteIcon-03.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'swiper/dist/css/swiper.css'},
      { rel: 'stylesheet',type: 'text/css', href:'https://www.cmerdental.com/css/vikim.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'asset/css/reference.scss',
    'asset/css/base-variable.scss',
    'asset/css/base-style.scss',
    'asset/css/tailwind.css',
    'swiper/dist/css/swiper.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
