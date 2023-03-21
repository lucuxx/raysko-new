const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "zh-CN",
    },
    title: "深圳睿思科信息技术有限公司",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        hid: "description",
        name: "description",
        content: "立足终端领域，做世界一流企业",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "手持终端，人脸识别，RK3399及RK3288 主板",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // script: [
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }
    // ]
  },
  // server: {
  //   port: 3001,
  //   host: '0.0.0.0'
  // },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#FF0000' },
  loading: {
    color: "blue", // 进度条的颜色
    failedColor: "red", // 页面加载失败时的颜色（ 当 data 或 fetch 方法返回错误时）
    height: "20px", // 进度条的高度(在进度条元素的 style 属性上体现)
    throttle: 200, // 在 ms 中， 在显示进度条之前等待指定的时间。 用于防止条形闪烁
    duration: 5000, // 进度条的最大显示时长， 单位毫秒。 Nuxt.js 假设页面在该时长内加载完毕
    continuous: false, // 当加载时间超过duration时， 保持动画进度条
    css: true, // 设置为 false 以删除默认进度条样式（ 并添加自己的样式）
    rtl: false, // 从右到左设置进度条的方向
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/styles/index.scss",
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "~/static/css/animate.css",
    "~/assets/styles/animation.css", // 全局过渡动画
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/axios",
      ssr: true, // 开启服务端渲染
    },
    { src: "@/plugins/vue-awesome-swiper", ssr: false },
    "@/plugins/bootstrap-vue",
    "~/plugins/fontawesome.js",
  ],
  /**
   * 关闭遥感采集
   */
  telemetry: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt',
    // css 变量解析器
    "@nuxtjs/style-resources",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",

    "nuxt-precompress",
  ],

  nuxtPrecompress: {
    gzip: {
      enabled: true,
      filename: "[path].gz[query]",
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      enabled: true,
      filename: "[path].br[query]",
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
    enabled: true,
    report: false,
    test: /\.(js|css|html|txt|xml|svg)$/,
    // Serving options
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ["br", "gzip"],
    },
  },

  styleResources: {
    scss: ["./assets/styles/_variables.scss"],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  // 后台接口
  proxy: {
    "/api": {
      target: "http://localhost:3003",
      // pathRewrite: { '^/api': '' }
    },
  },
  /*
   ** Build configuration
   */
  /**
   * 取消预加载，（为true,可以添加prefetch和preload，以加快初始页面加载时间。）
   */
  // render: {
  //   resourceHints: false,
  // },
  build: {
    // plugins:[
    //   new webpack.ProvidePlugin({
    //     '$':'jquery'
    //   })
    // ],
    /*
     ** You can extend webpack config here
     */
    // 避免重复打包
    // vendor: ['axios'],

    extend(config, ctx) {},
    analyze: process.env.NODE_ENV = "production"? false:true,
    productionSourceMap: false,
    // extractCSS: {
    //   allChunks: true
    // },
    extractCSS: true,

    // publicPath: (process.env.NODE_ENV = "production"
    //   ? "www.raysko.com.w.kunlunaq.com/_nuxt/"
    //   : "_nuxt"), // 将文件上传到cdn

    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        name: true,
        minSize: 10000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            name: "node_vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            maxSize: 244000,
          },
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
          commons: {
            test: /node_modules[\\/](vue|vue-loader|vue-router|vuex|vue-meta|core-js|@babel\/runtime|axios|webpack|setimmediate|timers-browserify|process|regenerator-runtime|cookie|js-cookie|is-buffer|dotprop|nuxt\.js)[\\/]/,
            chunks: "all",
            priority: 10,
            name: true,
          },
        },
      },
    },
  },

  // loaders: [
  //   {
  //     test: /\.(png|jpe?g|gif|svg)$/,
  //     loader: "url-loader",
  //     query: {
  //       limit: 10000,
  //       name: 'img/[name].[hash].[ext]'
  //     }
  //   }
  // ],

  server: {
    port: 3004, // default: 3000
    host: "localhost", // default: localhost (推荐)
    // host: '0', // 等于 host: '0.0.0.0' 这样配置，在mac上这么配置没问题，但是在window上这么配置有报错。
    timing: false,
  },
};
