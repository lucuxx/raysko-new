<template>
  <div class="global-parallax py-5">
    <b-jumbotron>
      <b-container class="wrap">
        <template name="header">
          <h1 style="color: #fff">
            致力于研究出客户最满意的终端产品
          </h1></template
        >
        <br />
        <br />

        <template name="lead">
          <h3 style="color: #fff">
            深圳睿思科信息技术有限公司是国家高新技术企业和双软企业，是手持终端机厂家——手持终端品牌制造商，在成立之日，瑞思科率先在中国推出了自己的移动智能数据终端系列产品......
          </h3>
        </template>

        <br />
        <br />

        <!-- <hr class="my-4" /> -->

        <b-button
          variant="outline-light"
          @click="$router.push('/about/company')"
          >了解更多</b-button
        >
        <br />
        <br />
        <br />
        <br />

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
    </b-jumbotron>
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
      new WOW({mobile: false}).init();
    }
  },
};
</script>

<style lang="scss" scoped>
.global-parallax {
  background: url("~static/img/home/wang_13.png") center center no-repeat;
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
    // background: rgba($white, 0.2);
    z-index: 0;
  }
  > * {
    z-index: 1;
    position: relative;
  }
}
.wrap {
  padding: 30px 15px;
  &-num {
    color: $white;
    font-size: 42px;
    font-weight: 800;
    text-align: center;
  }
  &-title {
    color: $white;
    text-align: center;
  }
}
</style>
