<template>
  <section :class="{ bgColor: showBgColor }">
    <div class="container wrapper">
      <h3
        class="title mb-3 text-center wow fadeInUp"
        :class="{ fontColor: showFontColor }"
        data-wow-delay="0.2s"
      >
        {{ title }}
      </h3>
      <!-- <Heading :level="2" class="wow fadeInUp" data-wow-delay="0.2s">{{title}}</Heading> -->
      <div class="title-icon"></div>
      <p
        class="desc mt-3 mb-4 mx-5 text-muted text-center wow fadeInDown"
        :class="{ descFontColor: showFontColor }"
        data-wow-delay="0.4s"
        v-if="desc"
      >
        {{ desc }}
      </p>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    showBgColor: {
      type: Boolean,
      default: false,
    },
    showFontColor: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.bgColor {
  background: #fafafa;
}
.fontColor {
  color: $color-heading !important;
}

.wrapper {
  padding: 70px 0;
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif; /* 1 */
    display: block;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
    color: $white;
  }
  .title-icon {
    width: 30px;
    height: 5px;
    margin: 0 auto;
    // background: $theme-color;
    background: $white;
  }
  .desc {
    font-size: 14px !important;
    color: $white;
  }
  .descFontColor {
    color: #333 !important;
  }
}
</style>
