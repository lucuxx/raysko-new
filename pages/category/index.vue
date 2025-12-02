<template>
  <section>
    <div class="mobile-auto d-block d-md-none"></div>
    <div class="header-content spin-content">
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <!-- <h1 class="wow slideInLeft">产品中心</h1>
            <p class="wow slideInRight">先进产品，定制服务</p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5 wrapper">
      <b-row>
        <b-col md="3" order="0" order-md="0" class="mb-4 wow fadeInUp">
          <div class="d-none d-lg-block">
            <b-list-group class="left-menu">
              <b-list-group-item
                class="bg-muted"
                v-for="(item, index) of menu"
                :key="index"
                :active="active == index"
                @click="handleTabClick(item, index)"
                >{{ item.name }}
              </b-list-group-item>
            </b-list-group>
          </div>
          <div class="d-block d-lg-none">
            <b-form-select
              v-model="active"
              required
              :options="menu"
              value-field="id"
              text-field="name"
              @change="handleChange"
              size="lg"
              plain
            >
            </b-form-select>
          </div>
        </b-col>
        <b-col md="9" order="1" order-md="1" class="">
          <b-row class="mx-0">
            <b-col
              lg="4"
              md="6"
              sm="12"
              v-for="(item, ind) of products"
              :key="ind"
              class="wow fadeInUp"
            >
              <!-- :data-wow-delay="0.2 * ind + 's'" -->
              <b-card
                img-top
                class="mb-4"
                @click="$router.push('/product/' + item.id)"
              >
                <b-card-img class="mx-auto" :src="item.image"></b-card-img>
                <b-card-title class="mx-auto title-center align-center">{{
                  item.name
                }}</b-card-title>

                <!-- @click="$router.push('/product/' + item.id)" -->
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import { products } from "./data";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  data() {
    return {
      active: 0,
      tabList: products,
      menu: [],
      products: [],
    };
  },
  mounted() {
    this.active = 0;
    this.getList();
  },
  methods: {
    // 筛选列表
    getList() {
      // TODO 请求所有分类数据
      this.menu = this.tabList.map((i) => {
        return { id: i.id, name: i.name };
      });
      this.menu.unshift({ id: 0, name: "全部" });
      this.products = [];
      this.tabList.forEach((i) => {
        this.products = this.products.concat(i.children);
      });
      this.$nextTick(() => {
        if (process.browser) {
          new WOW({ mobile: false }).init();
        }
      });
    },
    // 点击筛选
    handleTabClick(item, index) {
      this.active = index;
      if (index !== 0) {
        // this.$router.push(`/category/${index}`);
        this.products = this.tabList[index - 1].children;
      } else {
        this.products = [];
        this.tabList.forEach((i) => {
          this.products = this.products.concat(i.children);
        });
      }
    },
    handleChange() {
      // console.log(this.active);
      if (this.active !== 0) {
        this.$router.push(`/category/${this.active}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background: url("https://raysko-image.oss-cn-shenzhen.aliyuncs.com/raysko.com/src_image/home-product/R350C_home.png?Expires=1723022922&OSSAccessKeyId=TMP.3KfJZmRtWtdvApcvQJePkSiQSiL6Xmd7cmTZHaMmJCH5HYuzH4L2igKMVHuNQo7AanYUP6akGGZt8pxfyPafGEujxCea1v&Signature=EAOssiG2AZ6d0xVhjUpSaRrBhGY%3D") center center
    no-repeat;
  // background: url("~/static/img/banner/products_banner.jpg") center center
  //   no-repeat;
  background-size: cover;
  // background-attachment: fixed;
}

.left-menu {
  position: sticky !important;
  top: calc($header-height + 20px);
}
.wrapper {
  // background: #f2f2f2;
}

.card {
  border: none;
  background: #fcfcfc;
  transition: all 0.4s;
}
.card ::v-deep .card-body {
  padding: 4px !important;
}

.card:hover {
  // background: #F1F1F1;
  transform: scale(1.1, 1.1);

  box-shadow: 0 0 10px #ccc;
  color: $theme-color;
}
.card-body-text {
  max-height: 102px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.title-center {
  text-align: center;
}
::v-deep .list-group-item {
  // border-color: transparent;
  border-radius: 0;
}
::v-deep .list-group-item.active {
  background: $theme-color;
}
::v-deep .list-group-item:hover {
  cursor: pointer;
}
::v-deep option {
  width: 100%;
}
</style>
