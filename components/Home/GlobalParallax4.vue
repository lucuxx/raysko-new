<template>
  <div>
    <b-container class="content">
      <b-img fluid :src="require('~/static/img/home/wang_4_title.png')"></b-img>

      <b-row class="mx-0">
        <b-col
          lg="8"
          md="12"
          sm="12"
          class="wow fadeInUp"
          :data-wow-delay="0.2 * 0 + 's'"
        >
          <b-card
            overlay
            :img-src="productList1[0].icon"
            :img-alt="productList1[0].title"
            text-variant="white"
            :title="productList1[0].title"
            class="my-2"
            align="left"
          >
            <b-card-text class="subtitle-style">{{
              productList1[0].desc
            }}</b-card-text>
          </b-card>
        </b-col>
        <b-col
          lg="4"
          md="12"
          sm="12"
          class="wow fadeInUp"
          :data-wow-delay="0.2 * 1 + 's'"
        >
          <b-card
            overlay
            :img-src="productList1[1].icon"
            :img-alt="productList1[1].title"
            text-variant="white"
            :title="productList1[1].title"
            class="my-2"
            align="left"
          >
            <b-card-text class="subtitle-style">{{
              productList1[1].desc
            }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <br />
      <b-row class="mx-0">
        <b-col
          lg="4"
          md="6"
          sm="12"
          v-for="(item, ind) of productList2"
          :key="ind"
          class="my-2 wow fadeInUp"
          :data-wow-delay="0.2 * ind + 's'"
          align="left"
        >
          <b-card
            overlay
            :img-src="item.icon"
            :img-alt="item.title"
            text-variant="white"
            :title="item.title"
          >
            <b-card-text class="subtitle-style">{{ item.desc }}</b-card-text>
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
      productList1: [
        {
          id: 1,
          icon: require("~/static/img/home/wang_8.png"),
          title: "智慧物流",
          desc: "INTELLIGENT LOGISTICS",
        },
        {
          id: 2,
          icon: require("~/static/img/home/wang_9.png"),
          title: "公共事业",
          desc: "PUBLIC SERVICE",
        },
      ],
      productList2: [
        {
          id: 3,
          icon: require("~/static/img/home/wang_10.png"),
          title: "政府事业",
          desc: "GOVERNMENT UNDERTAKING",
        },
        {
          id: 4,
          icon: require("~/static/img/home/wang_11.png"),
          title: "零售连锁",
          desc: "RETAIL CHAIN",
        },
        {
          id: 5,
          icon: require("~/static/img/home/wang_12.png"),
          title: "医疗服务",
          desc: "MEDICALSERVICE",
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
.card-title {
  font-size: 26px;
  font-weight: 600;
}

.subtitle-style {
  font-size: 18px;
  font-weight: 500;
}

.content {
  padding-bottom: 40px;
}
</style>
