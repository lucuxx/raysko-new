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
      title: "公司简介",
      desc: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;深圳睿思科信息技术有限公司是国家级高新技术企业和双软企业，是手持终端机厂家_手持终端品牌制造商。专注于研究移动智能数据终端，移动智能支付终端，金融POS，手持数据采集器，移动警务通，手持工业终端,访客机，RFID手持机，RFID超高频终端，工业PDA，刷脸支付设备，物流扫描巴枪，移动手持终端，身份证核验终端，手持机厂家等领域的移动应用设备的研发，生产，销售和服务以及整体解决方案。它是中国移动行业应用和发展的先驱和市场领袍者。我们有十五年的行为背景和发展经验。
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在成立之日，睿思科率先在中国推出了自己的移动智能数据终端系列产品。公司十份重视产品和技术的研发投入，不断追求技术创新。现有研究人员占50％以上，其中95％为本科生，研究生和博士。公司拥有多项专利和软件著作权，产品线齐全，不断更新，业绩持续高速增长，在业界移动应用领域享有盛誉。研究成果已成功应用于国家电网，支付宝移动支付和交警检查等大型项目。同时，它为物流和快递，零售连锁，医疗卫生，金融POS，电力，政府和公用事业等行业提供合适的移动应用软件和硬件集成解决方案。`,
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
