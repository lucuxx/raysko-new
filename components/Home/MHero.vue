<template>
    <div>
      <b-carousel
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        :interval="4000"
        no-hover-pause
      >
        <b-carousel-slide caption="" :img-src="require('~/static/img/banner/zhu350_1.jpg')">

        </b-carousel-slide>
        <b-carousel-slide caption="" :img-src="require('~/static/img/banner/zhu366c_2.jpg')">

        </b-carousel-slide>
        <b-carousel-slide caption="" :img-src="require('~/static/img/banner/zhu860_3.jpg')">

        </b-carousel-slide>
        <b-carousel-slide caption="" :img-src="require('~/static/img/banner/R8.jpg')">

        </b-carousel-slide>
        <!-- <b-carousel-slide caption="" :img-src="require('~/static/img/banner/R系列.jpg')">

        </b-carousel-slide> -->
      </b-carousel>
    </div>
  </template>

  <script>
  import Parallax from "vue-parallaxy";
  import Heading from "~/components/Heading.vue";
  if (process.browser) {
    // 在这里根据环境引入wow.js
    var { WOW } = require("wowjs");
  }
  export default {
    components: { Parallax, Heading },
    data() {
      return {
        bannerList: [
          {
            id: 1,
            icon: require("~/static/img/banner/banner02_big.jpg"),
            title: "互联网+政务",
            desc: "资源集约共享、弹性伸缩、极致体验、敏捷支撑",
          },
          {
            id: 2,
            icon: require("~/static/img/banner/banner3.png"),
            title: "互联网+企业",
            desc: "以卓越绩效管理为目标，引入全局的、整体的、一贯的管理理念",
          },
          {
            id: 3,
            icon: require("~/static/img/banner/banner5.jpeg"),
            title: "智慧城市（城市治理）",
            desc: "通过政务外网打通各委办局网络，集成综治大联动",
          },
        ],
        current: "",
        currentIndex: 0,
        timer: null,
      };
    },
    mounted() {
      if (process.browser) {
        // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({mobile: false}).init();
      }
    },

  };
  </script>

  <style scoped lang="scss">
  // .Masthead {
  // &:after {
  //   content: "";
  //   background: rgba($black, 0.5);
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   z-index: 1;
  // }
  // }

  // .banner-img {
  //   height: 200px;
  //   width: 100vw;
  // }

  .banner-img1 {
    height: 100vh;
    width: 100vw;
    background: url("~/static/img/banner/R350C.jpg") center center no-repeat;
    background-size: cover;
    // background-attachment: fixed;
  }
  .banner-img2 {
    height: 100vh;
    width: 100vw;
    background: url("~/static/img/banner/R366C.jpg") center center no-repeat;
    background-size: cover;
  }

  // /* 超小设备 (手机, 400px 以下屏幕设备) */
  // @media only screen and (max-width: 400px) {
  //   .banner-img {
  //     height: 200px;
  //     width: 100vw;
  //   }
  // }
  // /* 超小设备 (手机, 400px 以上屏幕设备) */
  // @media only screen and (min-width: 400px) {
  //   .banner-img {
  //     height: 300px;
  //     width: 100vw;
  //   }
  // }

  // /* 小设备 (平板电脑和大型手机，600 像素及以上) */
  // @media only screen and (min-width: 600px) {
  //   .banner-img {
  //     height: 360px;
  //     width: 100vw;
  //   }
  // }

  // /* 中型设备（平板电脑，768 像素及以上） */
  // @media only screen and (min-width: 768px) {
  //   .banner-img {
  //     height: 400px;
  //     width: 100vw;
  //   }
  // }

  // /* 大型设备（笔记本电脑/台式机，992 像素及以上） */
  // @media only screen and (min-width: 992px) {
  //   .banner-img {
  //     height: 100vh;
  //     width: 100vw;
  //   }
  // }

  // /* 超大型设备（大型笔记本电脑和台式机，1200 像素及以上） */
  // @media only screen and (min-width: 1200px) {
  //   .banner-img {
  //     height: 100vh;
  //     width: 100vw;
  //   }
  // }

  .hero-text {
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    z-index: 2;
    color: $white;
    max-width: 510px;
    margin: auto;
    @media screen and (max-width: 767px) {
      top: 30%;
      padding-right: 15px;
      padding-left: 15px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      color: $white;
    }
    h2 {
      position: relative;
      font-size: $font-size-xxx-large;
      @media screen and (min-width: 767px) {
        font-size: $font-size-xx-large;
        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 100px;
          height: 10px;
          background-color: $white;
          top: 50%;
        }
        &:before {
          left: 0;
        }
        &:after {
          right: 0;
        }
      }
    }
  }

  .masthead_btn {
    position: absolute;
    left: 0;
    right: 0;
    top: 90%;
    z-index: 2;
    color: $white;
    margin: auto;
    width: 50px;
    text-align: center;
    height: 50px;

    @media screen and (max-width: 767px) {
      top: 84%;
    }
    @media screen and (min-width: 767px) {
      top: 92%;
    }
  }
  </style>
