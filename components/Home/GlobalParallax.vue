<template>
  <div class="global-parallax py-5">
     <b-container class="text-center">
       <Heading :level="2">Let’s work together!</Heading>
       <p>I am available for freelance projects. Hire me and get your project done.</p>
       <Btn to="/about">Hire Me</Btn>
       <div style="height:500px">

      </div>
     </b-container>
   </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Button/Button.vue'
export default {
    components: {
        Heading,
        Btn
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.global-parallax {
    background: url("~static/img/home/home1.jpg") center center no-repeat;
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
