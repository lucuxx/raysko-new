<template>
  <div class="global-parallax py-5">
     <b-container class="text-center">
      <AboutProduct />
       <!-- <Btn to="/about">更多</Btn> -->
     </b-container>
   </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Button/Button.vue'
import AboutProduct from '~/components/Home/AboutProduct.vue'
export default {
    components: {
        Heading,
        Btn,
        AboutProduct
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.global-parallax {
    background: url("~static/img/home/home2.png") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba($white, 0.5);
      z-index: 0;
    }
    > * {
      z-index: 1;
      position: relative;
    }
}
</style>
