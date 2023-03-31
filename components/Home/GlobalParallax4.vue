<template>
  <div class="py-5">
    <b-container class="text-center">
      <Heading :level="2" class="wow fadeInUp">我们的优势</Heading>
      <p class="wow fadeInDown">
        专注于对品牌、策划、体验等方面的探索和研究，保证了策划、开发、设计、方案实施、研究等完善的专业化运作，根据客户具体情况制定系列专业和规范的客户服务和保障体系，为企业提供周到、放心的一站式服务。
      </p>
      <b-row class="mx-0">
        <b-col
          lg="4"
          md="6"
          sm="12"
          v-for="(item, ind) of productList"
          :key="ind"
          class="wow fadeInUp"
          :data-wow-delay="0.2 * ind + 's'"
        >
          <b-card img-top class="my-2" img-height="100" img-width="100">
            <b-card-img
              class="w-50 mx-auto d-block"
              :src="item.icon"
            ></b-card-img>
            <b-card-title class="w-70 mx-auto mt-2 text-truncate">{{
              item.title
            }}</b-card-title>
            <b-card-text class="w-70 mx-auto card-body-text text-muted">{{
              item.desc
            }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Heading from "~/components/Heading.vue";
import Btn from "~/components/Button/Button.vue";
export default {
  components: {
    Heading,
    Btn,
  },
  data() {
    return {
      productList: [
        {
          id: 1,
          icon: require("~/static/img/home/youshi01.png"),
          title: "先进技术",
          desc: "先进技术，工艺卓越，量身定制",
        },
        {
          id: 2,
          icon: require("~/static/img/home/youshi02.png"),
          title: "专业品质",
          desc: "专业品质，业界领航，新标杆",
        },
        {
          id: 3,
          icon: require("~/static/img/home/youshi03.png"),
          title: "优质服务",
          desc: "专职客服，贴心服务",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: none;
}
</style>
