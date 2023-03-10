module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-CN'
    },
    title: '深圳睿思科信息技术有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '立足终端领域，做世界一流企业' },
      { hid: 'keywords', name: 'keywords', content: '手持终端，人脸识别，RK3399及RK3288 主板' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // server: {
  //   port: 3001,
  //   host: '0.0.0.0'
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF0000' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~/static/css/animate.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/vue-awesome-swiper', ssr: false},
    '@/plugins/bootstrap-vue'
  ],
  /**
   * 关闭遥感采集
   */
  telemetry: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
 /**
  * 取消预加载
  */
  render: {
    resourceHints: false
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    // analyze: true,
    productionSourceMap: false,
    extractCSS: {
      allChunks: true
    }
  },

  server: {
    port: 3004, // default: 3000
    host: '0.0.0.0', // default: localhost (推荐)
    // host: '0', // 等于 host: '0.0.0.0' 这样配置，在mac上这么配置没问题，但是在window上这么配置有报错。
    timing: false
  },
}
