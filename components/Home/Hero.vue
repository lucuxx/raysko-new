<template>

  <div>

    <parallax>

      <!-- <img src="~/static/img/home/home.gif" alt="" height="800"/> -->

      <b-img fluid :src="require('~/static/img/home/home.gif')"></b-img>

    </parallax>

    <div class="hero-text text-center">

      <Heading :level="3">Hey</Heading>

      <Heading :level="2">welcome</Heading>

    </div>

  </div>

</template>

<script>
import Parallax from 'vue-parallaxy';
import Heading from '~/components/Heading.vue'
export default { components: { Parallax, Heading } }
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
// .Masthead {
//   &:after {
//     content: "";
//     background: rgba($black, 0.5);
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     z-index: 1;
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
    top: 15%;
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
</style>

