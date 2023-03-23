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
      title: "企业文化",
      desc: `愿景：造客户最满意的手持终端 <br/>
           使命：创行业一流，做全国第一 <br />
           核心价值观：创新，协作，睿智，思考`,
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
.article-style {
  font-size: 16px;
  line-height: 32px;
}
</style>
