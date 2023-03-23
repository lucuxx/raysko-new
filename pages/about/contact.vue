<template>
  <section>
    <SectionHeading :heading="title" content="" />
    <article class="container">
      <b-row class="mx-0 mb-3">
        <b-col
          lg="4"
          md="6"
          sm="12"
          v-for="(item, ind) of contactList"
          :key="ind"
          class="wow fadeInUp "
          :data-wow-delay="0.2 * ind + 's'"
        >
          <div class="wrap px-3 py-3 shadow p-3 mb-5 bg-white rounded">
            <div class="wrap-title">{{ item.title }}</div>
            <div class="wrap-desc pb-3">{{ item.desc }}</div>
            <div>
              <b-img  :src="item.img" height="60"></b-img>
            </div>
          </div>
        </b-col>
      </b-row>

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
      title: "联系我们",
      contactList: [
        {
          title: "咨询电话:",
          desc: "熊先生 13798209586",
          img: require("~/static/img/about/mobile.png"),
        },
        {
          title: "邮箱地址:",
          desc: "xiongpeng0809@raysko.cn",
          img: require("~/static/img/about/email.png"),
        },
        {
          title: "公众号:",
          desc: "微信搜索：睿思科",
          img: require("~/static/img/footer/lianxi.jpg"),
        },
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
.wrap {
  font-size: 14px;
  line-height: 32px;
  border: 2px solid #e1e5ec;
  &-title {
    color: #999999;
  }
  &-desc {
    color: #555555;
    font-size: 16px;
  }
}
</style>
