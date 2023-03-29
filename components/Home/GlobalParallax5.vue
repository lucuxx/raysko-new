<template>
  <div class="global-parallax py-5">
    <b-container class="wrap">
      <b-row no-gutters class="row">
        <b-col
          lg="3"
          md="6"
          sm="12"
          v-for="(item, ind) of list"
          :key="ind"
          class="pb-3 wow fadeInUp"
          :data-wow-delay="0.2 * ind + 's'"
        >
          <div class="wrap-num">{{ item.num }}</div>
          <div class="wrap-title">{{ item.title }}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Heading from "~/components/Heading.vue";
import Btn from "~/components/Button/Button.vue";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}
export default {
  components: {
    Heading,
    Btn,
  },
  data() {
    return {
      list: [
        { num: "10年+", title: "行业经验" },
        { num: "100+", title: "经典产品" },
        { num: "50+", title: "行业解决方案" },
        { num: "100+", title: "研发团队" },
      ],
    };
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init();
    }
  },
};
</script>

<style lang="scss" scoped>
.global-parallax {
  background: url("~static/img/global/header.jpeg") center center no-repeat;
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
.wrap {
  padding: 30px 0;
  &-num {
    color: $white;
    font-size: 32px;
    font-weight: 800;
    text-align: center;
  }
  &-title {
    color: $white;
    text-align: center;
  }
}
</style>
