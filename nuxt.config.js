import Vue from "vue";
import VueGtag from "vue-gtag";
import sitemap from './static/sitemap';

// 引入自定义路由
import getRoutes from './router';

Vue.use(VueGtag, {
  config: { id: "G-CSH75BTYE7" }
});

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static', // default is 'server'
  head: {
    title: 'dentistry',
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
      },
      {
        async: "async",
        src: 'https://www.googletagmanager.com/gtag/js?id=GT-5NPSM7'
      },
      {
        innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KCSDT9F');
        `,
        type: 'text/javascript',
      },
      {
        async: "async",
        src: 'https://ackee-vercl-monitoring-panel-uccy.vercel.app/tracker.js',
        'data-ackee-server': 'https://ackee-vercl-monitoring-panel-uccy.vercel.app',
        'data-ackee-domain-id': '4de5a0a3-c191-4c42-842f-99d9c15e9c90',
        type: 'text/javascript',
        body: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-5NPSM7');
        `,
        type: 'text/javascript',
      },
      // {
      //   src:
      //     "./plugins/ackee-vercl.js",
      //   body:true
      // },
      {
        src:
          "./plugins/gtm.js",
        body: true
      },
    ],
    htmlAttrs: {
      lang: 'zh-hk'
    },
    meta: [
      { charset: 'utf-8' },
      { name: "facebook-domain-verification", content: "jn1yymxpim2vt1z66kcb6pnr3xloyn" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0, user-scalable=0' },
      { name: 'google-site-verification', content: 'E_dAKmUzK5oAQ-MryRzmecGXd1UUlgIrF-K-q_jMQZs' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', type: 'text/css', href: 'swiper/dist/css/swiper.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://static.cmereye.com/static/css/cmerdental/vikim.css?v=1.0.0' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'asset/css/reference.scss',
    'asset/css/base-variable.scss',
    'asset/css/base-style.scss',
    'asset/css/tailwind.css',
    'swiper/dist/css/swiper.css',
    'element-ui/lib/theme-chalk/index.css',
    'animate.css/animate.min.css'
    // 'asset/css/vikim.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/tag.js', mode: 'client' },
    { src: "~/plugins/vue-swiper.js", ssr: false },
    '@/plugins/element-ui'

  ],
  // Modules: https://go.nuxtjs.dev/config-modules  站点地图
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    // credentials: true,
    // baseURL:,
    // headers: {
    // 'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest'
    // }
  },
  proxy: {
    '/api': {
      target: 'https://forms.cmerdental.com/api.php/cms/addmsg',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    },
    "/dingtalk": {
      target: 'https://oapi.dingtalk.com',
      prependPath: true,
      changeOrigin: true,
      pathRewrite: {
        '^/dingtalk': ''
      }
    }
  },
  sitemap: sitemap,
  //重定向路由
  router: {
    extendRoutes: (routes, resolve) => {
      // 清空Nuxt.js自动生成的路由
      routes.splice(0);
      // 重新将自定义路由配置设置进去
      routes.push(...getRoutes(resolve));
    }
  },


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  server: {
    port: 3006, // default: 3000
    host: "0.0.0.0", // default: localhost
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
