<template>
  <section>
    <SectionHeading :heading="title" content="" />
    <article>
      <p class="article-style" v-html="desc"></p>
      <div class="row wow pulse" data-wow-delay="0.8s">
        <b-col lg="3" md="6" sm="12">
          <div class="box box-1 shadow p-3 mb-5 bg-white rounded">
            <h3>愿景</h3>
            <span class="spin-sort-hr"></span>
            <p>造客户最满意的手持终端</p>
          </div>
        </b-col>
        <b-col lg="3" md="6" sm="12">
          <div class="box box-2 shadow p-3 mb-5 bg-white rounded">
            <h3>企业宗旨</h3>
            <span class="spin-sort-hr"></span>
            <p>质量第一、合作共赢</p>
          </div>
        </b-col>
        <b-col lg="3" md="6" sm="12">
          <div class="box box-3 shadow p-3 mb-5 bg-white rounded">
            <h3>发展目标</h3>
            <span class="spin-sort-hr"></span>
            <p>创行业一流，做全国第一</p>
          </div>
        </b-col>
        <b-col lg="3" md="6" sm="12">
          <div class="box box-4 shadow p-3 mb-5 bg-white rounded">
            <h3>核心价值观</h3>
            <span class="spin-sort-hr"></span>
            <p>创新、协作、睿智、思考</p>
          </div>
        </b-col>
      </div>
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
           企业宗旨：质量第一，合作共赢 <br />
           使命：创行业一流，做全国第一 <br />
           核心价值观：创新，协作，睿智，思考 <br />
           诚信：我们信守承诺、言出必行，诚信是我们最重要的无形资产，公司坚持以诚信赢得客户 <br />
          创新：我们积极进取，坚持创新，从技术、产品、解决方案、业务管理等全方位开拓、创新，围绕客户需求持续创新 <br />
          价值：我们坚持以客户为中心，快速响应客户需求，持续为客户创造长期价值，并为社会、员工、股东给予价值回报`,
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

.box {
  width: 100%;
  text-align: center;
  height: 300px;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box-1 {
  background-image: url("~/static/img/about/编组.png");
}
.box-2 {
  background-image: url("~/static/img/about/编组 15.png");
}
.box-3 {
  background-image: url("~/static/img/about/编组 16.png");
}
.box-4 {
  background-image: url("~/static/img/about/编组 17.png");
}
</style>
