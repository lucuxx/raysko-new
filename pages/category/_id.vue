<template>
  <section>
    <div style="height: 64px" class="d-block d-md-none"></div>
    <div class="header-content spin-content">
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <h1 class="wow slideInLeft"></h1>
            <p class="wow slideInRight">先进产品，定制服务</p>
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
import { mapState } from "vuex";

if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  validate({ params, query }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      active: null,
      tabList: [
        {
          name: "智能手持终端",
          link: "/category/1",
          children: [
            {
              id: "R366",
              name: "R366",
              image: require("~/static/img/categorys/R366.jpg"),
            },
            {
              id: "R366A",
              name: "R366A",
              image: require("~/static/img/categorys/R366A.jpg"),
            },
            {
              id: "R366-S",
              name: "R366-S",
              image: require("~/static/img/categorys/R366A.jpg"),
            },
            {
              id: "R350C",
              name: "R350C",
              image: require("~/static/img/categorys/R350.jpg"),
            },
            // {
            //   id: 1,
            //   name: "R606",
            //   image: require("~/static/img/categorys/go.png"),
            // },
            {
              id: "R530",
              name: "R530",
              image: require("~/static/img/categorys/R530C.jpg"),
            },
          ],
        },
        {
          name: "手持打印终端",
          link: "/category/2",
          children: [
            {
              id: "R860",
              name: "R860",
              image: require("~/static/img/categorys/R800C.jpg"),
            },
            {
              id: "R860-S",
              name: "R860-S",
              image: require("~/static/img/categorys/R800C.jpg"),
            },
          ],
        },
        {
          name: "智能平板",
          link: "/category/3",
          children: [
            {
              id: "R888",
              name: "R888",
              image: require("~/static/img/categorys/R888.png"),
            },
          ],
        },
        {
          name: "RFID手持终端",
          link: "/category/4",
          children: [
            {
              id: "R366C",
              name: "R366C",
              image: require("~/static/img/categorys/R366C.jpg"),
            },
            {
              id: "R366-UHF",
              name: "R366-UHF",
              image: require("~/static/img/categorys/R366ETC.jpg"),
            },
            {
              id: "R860-ETC",
              name: "R860-ETC",
              image: require("~/static/img/categorys/R800CETC.jpg"),
            },
          ],
        },
        {
          name: "访客终端",
          link: "/category/5",
          children: [
            {
              id: "R900P",
              name: "R900P",
              image: require("~/static/img/categorys/R900P.jpg"),
            },

            {
              id: "R6",
              name: "R6",
              image: require("~/static/img/categorys/R6挂壁.jpg"),
            },

            {
              id: "R7",
              name: "R7",
              image: require("~/static/img/categorys/R7.jpg"),
            },
            {
              id: "R8",
              name: "R8",
              image: require("~/static/img/categorys/R8.jpg"),
            },
          ],
        },
        {
          name: "智能PCBA方案",
          link: "/category/6",
          children: [
            {
              id: "R229",
              name: "R229",
              image: require("~/static/img/categorys/R229.jpg"),
            },
            {
              id: "R450",
              name: "R450",
              image: require("~/static/img/categorys/R450.jpg"),
            },
          ],
        },
      ],
      menu: [],
      products: [],
    };
  },
  mounted() {
    this.active = this.$route.params.id;
    this.getList(this.active);
  },
  methods: {
    // 筛选列表
    getList(active) {
      // TODO 请求所有分类数据
      this.menu = this.tabList.map((i) => {
        return { id: i.id, name: i.name };
      });
      this.menu.unshift({ id: 0, name: "全部" });
      this.products = [];
      this.tabList.forEach((i) => {
        if (i.id == this.active) {
          this.products = i.children;
        }
      });
      this.$nextTick(() => {
        if (process.browser) {
          new WOW({ mobile: false }).init();
        }
      });
    },
    // 点击筛选
    handleTabClick(item, index) {
      if (index == 0) {
        this.$router.push({ path: "/category" });
      } else if (this.$route.params.id != item.id) {
        this.$router.push(`/category/${item.id}`);
      }
    },
    handleChange() {
      console.log(this.active);
      if (this.active !== 0) {
        this.$router.push(`/category/${this.active}`);
      } else {
        this.$router.push({ path: "/category" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background: url("~/static/img/banner/inside-banner3.jpeg") center center
    no-repeat;
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
</style>
