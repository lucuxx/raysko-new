<template>
  <section>
    <SectionHeading :heading="title" content="" />
    <b-container class="homeabout">
      <!-- <b-row class="align-items-center py-5 wow fadeInUp" v-for="(items, index) in homeabout" :key="index">
        <b-col cols="12" sm="6">
          <p>{{ items.desc1 }}</p>
          <p>{{ items.desc2 }}</p>
        </b-col>
        <b-col cols="12" sm="6">
          <div class="side-image-wrapper">
            <b-img fluid :src="`img/home/${items.image}`" class="" alt="" />
          </div>
        </b-col>
      </b-row> -->
      <TimeLine />
  </b-container>
  </section>
</template>

<script>
import SectionHeading from "~/components/SectionHeading";
import TimeLine from "~/components/About/timeline.vue"

export default {
  components: {
    SectionHeading,
    TimeLine
  },
  data() {
    return {
      title: "发展历程",
    };
  },
};
</script>

<style lang="scss" scoped>
.article-style{
  font-size:16px;
  line-height: 32px;
}
</style>
