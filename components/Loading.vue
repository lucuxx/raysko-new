<template>
  <div class="app">
    <div class="admin-home">
      <div id="loader"></div>
      <!-- <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div> -->
      <div class="load_title">
        加载中...
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    start() {},
    finish() {},
    //element组件
    open() {
      this.$message.error("页面加载错误，请刷新");
    },
    fail() {
      this.open();
    },
    increase(num) {},
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.$nuxt.$loading.finish();
    });
  },
};
</script>

<style lang="scss" scoped>
html,
body,
.app {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  z-index: 999999;
  // background: url("~/static/img/global/welcome.jpeg") center center
  //   no-repeat;
  // background-size: cover;
  // background-attachment: fixed;
}
.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

// .admin-home {
//   margin: 0;
//   padding: 0;
//   height: 100%;
//   background: #fff;
//   font-size: 14px;
//   overflow: hidden;
//   background-image: linear-gradient(-45deg, #fff, #f0f2f5);
// }

.admin-home::before {
  content: "";
  display: block;
  width: 65vw;
  height: 65vw;
  border-radius: 65vw;
  position: absolute;
  left: -30vw;
  top: -30vw;
  box-shadow: rgba(27, 27, 27, 0.2) 0 0 10vw;
  // background-image: linear-gradient(90deg, #dbdee2, #fff, #d0d5da);
  background: #0a64d2;
  z-index: -1;
}
.admin-home::after {
  content: "";
  display: block;
  width: 44vw;
  height: 44vw;
  border-radius: 44vw;
  position: absolute;
  right: -22vw;
  bottom: -22vw;
  box-shadow: rgba(12, 11, 11, 0.2) 0 0 10vw;
  // background-image: linear-gradient(#fff, #d0d5da, #d0d5da);
  background:#0a64d2;
  z-index: -1;
}
.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

.admin-home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  color: snow;
  background-color: #001220;
}

// #loader-wrapper {
//   // background: url("~static/img/loading/blob-scene-haikei.svg") center center no-repeat;
//   // background-size: cover;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 1000;
// }

#loader {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  /* COLOR 1 */
  // border-top-color: #fff;
  border-top-color: $theme-color;
  -webkit-animation: spin 2s linear infinite;
  /* Chrome, Opera 15+, Safari 5+ */
  -ms-animation: spin 2s linear infinite;
  /* Chrome, Opera 15+, Safari 5+ */
  -moz-animation: spin 2s linear infinite;
  /* Chrome, Opera 15+, Safari 5+ */
  -o-animation: spin 2s linear infinite;
  /* Chrome, Opera 15+, Safari 5+ */
  animation: spin 2s linear infinite;
  /* Chrome, Firefox 16+, IE 10+, Opera */
  z-index: 10000;
}

// #loader:before {
//   content: "";
//   position: absolute;
//   top: 5px;
//   left: 5px;
//   right: 5px;
//   bottom: 5px;
//   border-radius: 50%;
//   border: 3px solid transparent;
//   /* COLOR 2 */
//   // border-top-color: #fff;
//   border-top-color: $theme-color;
//   -webkit-animation: spin 3s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   -moz-animation: spin 3s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   -o-animation: spin 3s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   -ms-animation: spin 3s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   animation: spin 3s linear infinite;
//   /* Chrome, Firefox 16+, IE 10+, Opera */
// }

// #loader:after {
//   content: "";
//   position: absolute;
//   top: 15px;
//   left: 15px;
//   right: 15px;
//   bottom: 15px;
//   border-radius: 50%;
//   border: 3px solid transparent;
//   // border-top-color: #fff;
//   border-top-color: $theme-color;
//   /* COLOR 3 */
//   -moz-animation: spin 1.5s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   -o-animation: spin 1.5s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   -ms-animation: spin 1.5s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   -webkit-animation: spin 1.5s linear infinite;
//   /* Chrome, Opera 15+, Safari 5+ */
//   animation: spin 1.5s linear infinite;
//   /* Chrome, Firefox 16+, IE 10+, Opera */
// }

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}




/* JavaScript Turned Off */

.no-js #loader-wrapper {
  // display: none;
}

.no-js h1 {
  color: #222222;
}

.load_title {
  font-family: "Open Sans";
  // color: #fff;
  color: $theme-color;
  font-size: 19px;
  width: 100%;
  text-align: center;
  z-index: 9999999999999;
  position: absolute;
  top: 60%;
  opacity: 1;
  line-height: 30px;
}

.load_title span {
  font-weight: normal;
  font-style: italic;
  font-size: 13px;
  // color: #fff;
  color: $theme-color;
  opacity: 0.5;
}
</style>
