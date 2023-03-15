<template>
  <div id="GoTop" @click="GoTop()" v-show="flag">
    <!-- <span class="glyphicon glyphicon-chevron-up"></span> -->
    <b-img
      :src="require('~/static/img/global/go.png')"
      height="30"
    ></b-img>
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    // 回到顶部
    let that = this;
    this.$nextTick(() => {
      // this.initScroll()
      window.onscroll = function () {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 800) {
          //写后台加载数据的函数 一定要用that
          that.flag = true;
        } else {
          that.flag = false;
        }
      };
    });
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    }
  }
};
</script>
<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 10px;
  bottom: 20px;
  z-index: 99999999;
  cursor: pointer;
}
#GoTop > span {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
