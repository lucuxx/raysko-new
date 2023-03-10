<template>
  <div>
    <no-ssr>
      <Hero />
    </no-ssr>
    <!-- <GlobalParallax /> -->
    <GlobalParallax2 />
    <GlobalParallax3 />
    <GlobalParallax4 />
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero.vue'
import GlobalParallax from '@/components/Home/GlobalParallax.vue'
import GlobalParallax2 from '@/components/Home/GlobalParallax2.vue'
import GlobalParallax3 from '@/components/Home/GlobalParallax3.vue'
import GlobalParallax4 from '@/components/Home/GlobalParallax4.vue'
import NoSSR from 'vue-no-ssr'



export default {
  components: {
    Hero,
    GlobalParallax,
    GlobalParallax2,
    GlobalParallax3,
    GlobalParallax4,
    'no-ssr': NoSSR
  },
}
</script>

<style lang="scss" scoped>

</style>
