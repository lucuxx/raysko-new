<template>
  <section>
    <SectionHeading :heading="title" content="" />
    <article>
      <p class="article-style" v-html="desc"></p>
    </article>
  </section>
</template>

<script>
import SectionHeading from "~/components/SectionHeading";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}
export default {
  components: {
    SectionHeading,
  },
  data() {
    return {
      title: "售后服务",
      desc: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司的产品都提供具有一定时间期限的保修期（详细信息请参见产品使用手册）。保修期服务只针对使用该 产品的第一个最终用户。保修期服务不得转让。
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果产品经核实之后在保修范围内，请将产品按照返修流程返回到公司，之后公司将根据情况选择维修或更换产品，并确保将其恢复到最适宜的性能水平，不收取任何费用。如果您是从授权经销商处购买的产品，请与经销商联系并提供产品的序列号。您的经销商将直接与公司联系，来安排产品的维修。公司聚力通过位于各地的服务中心为所有公司的产品提供维修服务。无论是保修期内还是保修期外维修，都请将需要维修的产品随同购买日期记录以及维修单一起寄到维修中心`,
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
.article-style {
  font-size: 16px;
  line-height: 32px;
}


</style>
