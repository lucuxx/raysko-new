<template>
  <div>

    <b-container>
      <!-- <b-img fluid :src="require()" ></b-img> -->
      <SectionHeading heading="" content="" style="padding: 20px 0" />
      <b-img fluid :src="require('~/static/img/home/wang_2_title.png')"></b-img>
      <Product />

      <!-- <SectionHeading heading="热门产品" content="" style="padding: 20px 0" />
      <b-img fluid :src="require('~/static/img/banner/R366系列.jpg')"></b-img>
      <SectionHeading heading="" content="" style="padding: 20px 0" />
      <b-img fluid :src="require('~/static/img/banner/R8.jpg')"></b-img>
      <SectionHeading heading="" content="" style="padding: 20px 0" /> -->
      <!-- <CountTo /> -->
      <!-- <Btn to="/about">更多</Btn> -->
    </b-container>
  </div>
</template>

<script>
import SectionHeading from "~/components/SectionHeading";
import Product from "~/components/index/product";
export default {
  components: {
    SectionHeading,
    Product,
  },
};
</script>

<style lang="scss" scoped>
// .global-parallax {
//     background: url("~static/img/home/home2.png") center center no-repeat;
//     background-size: cover;
//     background-attachment: fixed;
//     position: relative;
//     &:after {
//       content: "";
//       position: absolute;
//       left: 0;
//       right: 0;
//       top: 0;
//       bottom: 0;
//       background: rgba($white, 0.5);
//       z-index: 0;
//     }
//     > * {
//       z-index: 1;
//       position: relative;
//     }
// }
</style>
