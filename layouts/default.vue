<template>
  <div>
    <!-- loading -->
    <Loading :hidden="!show2" />
    <!-- 内容 -->
    <my-header />
    <nuxt v-if="!show2" />
    <concat  />
    <my-footer />
    <go-top />
  </div>
</template>

<script>
import MyHeader from "@/components/header/index";
import Carousel from "@/components/index/carousel";
import Concat from "@/components/footer/concat";
import MyFooter from "@/components/footer/index";
import Loading from "~/components/Loading.vue";
import GoTop from "~/components/GoTop.vue";
import smoothscroll from "smoothscroll-polyfill";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  components: {
    MyHeader,
    Carousel,
    Concat,
    MyFooter,
    Loading,
    GoTop,
  },
  data() {
    return {
      show2: true,
      footBarHeight:200
    };
  },
  created() {
    var that = this;
    if (process.client) {
      document.onreadystatechange = function () {
        if (document.readyState === "complete") {
          that.show2 = false;
        }
      };
    }
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init();
      smoothscroll.polyfill();
    }
  },
};
</script>

<!--
<style lang="scss">
@import "@/assets/styles/normalize.css";
@import "@/assets/styles/reset.scss";


html {
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei",
    FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB",
    "Hiragino Sans GB W3", Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #333;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style> -->
