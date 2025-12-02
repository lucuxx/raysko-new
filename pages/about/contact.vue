<template>
  <section>
    <SectionHeading :heading="title" content="" />
    <article class="container">
      <b-row class="row mx-0 mb-3" >
        <b-col
          lg="4"
          md="6"
          sm="12"
          v-for="(item, ind) of contactList"
          :key="ind"
          class="wow fadeInUp"
          :data-wow-delay="0.2 * ind + 's'"
        >
          <div class="wrap px-3 py-3 shadow p-3 mb-5 bg-white rounded">
            <div class="wrap-title">{{ item.title }}</div>
            <div class="wrap-desc pb-3">{{ item.desc }}</div>
            <div>
              <b-img :src="item.img" height="60"></b-img>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- <div  class="px-auto" style="height:300px;"> -->
        <!-- <iframe
          id="myiframe"
          width="800"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://lbs.amap.com/tools/showmap?1_560_440_113.87345_22.564725&=%E6%B7%B1%E5%9C%B3%E7%9D%BF%E6%80%9D%E7%A7%91%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&=%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%AE%9D%E5%AE%89%E5%8C%BA%E5%85%B4%E4%B8%9A%E8%B7%AF2005%E5%8F%B7%E5%B9%BF%E5%85%B4%E6%BA%90%E4%BA%92%E8%81%94%E7%BD%91%E5%88%9B%E6%84%8F%E5%9B%ADC%E6%A0%8B509&=&=&="
        ></iframe> -->
      <!-- </div> -->
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
          desc: "熊先生 13682386347",
          img: require("~/static/img/about/mobile.png"),
        },
        {
          title: "邮箱地址:",
          desc: "xiongxy@raysko.com",
          img: require("~/static/img/about/email.png"),
        },
        {
          title: "公众号:",
          desc: "微信搜索：睿思科",
          img: require("~/static/img/footer/lianxi.jpeg"),
        },
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
