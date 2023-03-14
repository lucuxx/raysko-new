<template>
  <section>
    <div class="header-content spin-content" >
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <h1 class="wow slideInLeft">终端产品</h1>
            <p class="wow slideInRight">先进产品，贴心服务</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-5">
    <div class="border-bottom mb-5">
      <div class="container d-flex justify-content-between align-items-center">
        <h4 class="py-3">{{info.title}}</h4>
        <div class="d-none d-md-block">
          <b-breadcrumb class="bg-white m-0 p-0">
            <b-breadcrumb-item to="/">网站首页</b-breadcrumb-item>
            <b-breadcrumb-item to="/product">产品解决方案</b-breadcrumb-item>
            <b-breadcrumb-item active>{{info.title}}</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="text-center mb-2" v-if="info.subtitle">{{info.subtitle}}</h4>
      <b-row align-h="center" class="mb-5">
        <b-col md="8"><b-img :src="info.picture" fluid alt="" /></b-col>
      </b-row>
      <h5 class="title mb-4">方案描述</h5>
      <p class="detail mb-5 text-justify">{{info.desc}}</p>
      <h5 class="title mb-4">方案特点</h5>
      <p class="detail mb-5 text-justify" v-html="info.character"></p>
      <h5 class="title mb-4">应用场景</h5>
      <p class="detail mb-5 text-justify" v-html="info.apply"></p>
      <template v-if="info.picture2">
        <h4 class="text-center mb-4" v-if="info.subtitle2">{{info.subtitle2}}</h4>
        <b-row align-h="center" class="mb-5">
          <b-col md="8"><b-img :src="info.picture2" fluid alt="" /></b-col>
        </b-row>
        <h5 class="title mb-4">方案描述</h5>
        <p class="detail mb-5 text-justify">{{info.desc2}}</p>
        <h5 class="title mb-4">方案特点</h5>
        <p class="detail mb-5 text-justify" v-html="info.character2"></p>
        <h5 class="title mb-4">应用场景</h5>
        <p class="detail mb-5 text-justify" v-html="info.apply2"></p>
      </template>
      <template v-if="info.picture3">
        <h4 class="text-center mb-3" v-if="info.subtitle3">{{info.subtitle3}}</h4>
        <b-row align-h="center" class="mb-5">
          <b-col md="8"><b-img :src="info.picture3" fluid alt="" /></b-col>
        </b-row>
        <h5 class="title mb-4">方案描述</h5>
        <p class="detail mb-5 text-justify">{{info.desc3}}</p>
        <h5 class="title mb-4">方案特点</h5>
        <p class="detail mb-5 text-justify" v-html="info.character3"></p>
        <h5 class="title mb-4">应用场景</h5>
        <p class="detail mb-5 text-justify" v-html="info.apply3"></p>
      </template>
    </div>
  </div>
  </section>

</template>

<script>
import { product } from '@/utils/mock.js'

if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

export default {
  computed: {
    info() {
      const index = this.$route.params.id
      return product[index - 1]
    }
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }
  }
}
</script>

<style lang="scss" scoped>
.header-content {
  background: url("~/static/img/banner/inside-banner3.jpeg") center center
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.spin-content {
  height: 200px;
  .flex {
    display: flex;
    height: 100%;
    width: 100%;
    > div {
      margin: auto;
    }
    h1 {
      font-size: 24px;
      color: #ffffff;
      text-align: center;
    }
    p {
      font-size: 14px;
      color: #ffffff;
    }
  }
}

@media screen and (min-width: 768px) {
  // content-1居中大行
  .spin-content {
    height: 456px;
    .flex {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: #2a333c;
}
.detail {
  font-size: 16px;
  line-height: 2;
  color: #2a333c;
}
.breadcrumb a {
  color: $theme-color;
}
</style>
