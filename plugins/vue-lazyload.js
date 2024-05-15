import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

//定义加载中的图片(如果用到的话可以用)
const loadimage = require('~/static/img/loading/loading2.gif')
//定义加载图片出错的时候展现的图片
const errorimage = require('~/static/img/404.png')

Vue.use(VueLazyLoad, {
  preLoad: 1.33, //预加载高度比例
  error: errorimage, //加载失败时图像的src
  loading:loadimage,
  attempt: 2,//尝试计数次数
  throttleWait: 500,//节流等待时间(通过调节此值可以查看loading的效果，根据实际情况调节)
  // filter: {
  //   progressive(listener, options) {
  //     // 实现渐近式加载图片（先加载模糊的图）
  //     listener.el.setAttribute('lazy-progressive', 'true')
  //     // 先加载模糊的图（这个地方是替换图片中的宽度与高度大小）
  //     let loadingUrl = listener.src.replace(/w_[0-9]+/g, 'w_5')
  //     loadingUrl = loadingUrl.replace(/h_[0-9]+/g, 'h_5')
  //     listener.loading = loadingUrl
  //   }
  // }
})
