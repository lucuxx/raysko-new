<template>
  <div>
    <parallax>
      <!-- <img src="~/static/img/home/home.gif" alt="" height="800"/> -->

      <b-img fluid :src="require('~/static/img/home/home.gif')"> </b-img>
    </parallax>
    <div
      class="masthead_btn wow bounce"
      data-wow-iteration="infinite"
      data-wow-delay="1.5s"
    >
      More
    </div>

    <div class="hero-text text-center">
      <Heading :level="3" class="wow zoomIn" data-wow-duration="2s"
        >Hey</Heading
      >

      <Heading :level="2" class="wow zoomIn" data-wow-duration="2s"
        >welcome</Heading
      >
    </div>
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
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init();
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
  height: 50px;

  @media screen and (max-width: 767px) {
    top: 70%;
  }
  @media screen and (min-width: 767px) {
    top: 92%;
  }
}
</style>
