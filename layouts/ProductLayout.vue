<template>
  <div>
    <Loading :hidden="!show2" />

    <MyHeader v-show="showNavbarBg"  :isLock="true" />
    <nuxt />
    <concat />
    <my-footer />
    <go-top />
  </div>
</template>

<script>
import MyHeader from "@/components/header/index";
import MyFooter from "@/components/footer/index";
import Concat from "@/components/footer/concat";
import GoTop from "~/components/GoTop.vue";
import Loading from "~/components/Loading.vue";
import smoothscroll from "smoothscroll-polyfill";


if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  name: "ProductLayout",
  components: { MyHeader, MyFooter, Concat, GoTop, Loading },
  data() {
    return {
      show2: true,
      showNavbarBg: true,
    };
  },
  created() {
    var that = this;
    if (process.client) {
      console.log("enter", document.readyState);
      if (document.readyState === "complete") {
        that.show2 = false;
      }
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
      new WOW({mobile: false}).init();
      smoothscroll.polyfill();
    }
    window.addEventListener("scroll", this.handleWindowScroll);

  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    // 监听窗口滚动，改变导航背景色
    handleWindowScroll(e) {
      const myTop =
        document.documentElement.scrollTop || document.body.scrollTop;


      const flag = myTop > 30;
      if (this.showNavbarBg == flag) {
        this.showNavbarBg = !flag;

      }


    },
  },
};
</script>

<style></style>
