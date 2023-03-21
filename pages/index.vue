<template>
  <div>

    <clint-only>
      <Hero />
    </clint-only>
    <GlobalParallax2 />
    <GlobalParallax3 />
    <GlobalParallax4 />
    <!-- <GlobalParallax /> -->
    <Partner />

  </div>
</template>

<script>
import Hero from '@/components/Home/Hero.vue'
// import GlobalParallax from '@/components/Home/GlobalParallax.vue'
import GlobalParallax2 from '@/components/Home/GlobalParallax2.vue'
import GlobalParallax3 from '@/components/Home/GlobalParallax3.vue'
import GlobalParallax4 from '@/components/Home/GlobalParallax4.vue'
import Partner from '@/components/Home/partner.vue'


if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");


}



export default {
  components: {
    Hero,
    // GlobalParallax,
    GlobalParallax2,
    GlobalParallax3,
    GlobalParallax4,
    Partner,
  },
  mounted(){
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init();

    }
  },
}
</script>

<style lang="scss" scoped>

</style>
