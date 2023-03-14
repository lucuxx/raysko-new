<template>
  <div class="global-parallax py-5">
     <b-container class="text-center">
       <Heading :level="2" class="wow slideInLeft" >优秀的团队</Heading>
       <p class="wow slideInRight">公司十分重视技术的研发投入，研发人员占比50%，拥有多项专利和软件著作权</p>
       <Btn to="/about">关于我们</Btn>
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

.global-parallax {
    background: url("~static/img/home/home1.jpg") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    width: 100%;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba($white, 0.2);
      z-index: 0;
    }
    > * {
      z-index: 1;
      position: relative;
    }
}
</style>
