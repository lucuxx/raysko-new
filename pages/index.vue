<template>
  <div>
    <client-only>
      <div class="d-none d-lg-block">
        <Hero />
      </div>
      <div class="d-block d-lg-none">
        <div class="mobile-auto d-block"></div>
        <MHero />
      </div>
    </client-only>
    <GlobalParallax2 />
    <GlobalParallax3 />
    <GlobalParallax4 />
    <GlobalParallax5 />
    <!-- <Partner /> -->
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero.vue";
import MHero from "@/components/Home/MHero.vue";
// import GlobalParallax from '@/components/Home/GlobalParallax.vue'
import GlobalParallax2 from "@/components/Home/GlobalParallax2.vue";
import GlobalParallax3 from "@/components/Home/GlobalParallax3.vue";
import GlobalParallax4 from "@/components/Home/GlobalParallax4.vue";
import GlobalParallax5 from "@/components/Home/GlobalParallax5.vue";
import Partner from "@/components/Home/partner.vue";

if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  components: {
    Hero,
    MHero,
    // GlobalParallax,
    GlobalParallax2,
    GlobalParallax3,
    GlobalParallax4,
    GlobalParallax5,
    Partner,
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({mobile: false}).init();
    }
  },
};
</script>

<style lang="scss" scoped></style>
