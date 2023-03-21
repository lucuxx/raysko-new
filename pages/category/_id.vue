<template>
  <section>
    <div style="height: 64px" class="d-block d-md-none"></div>
    <div class="header-content spin-content">
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <h1 class="wow slideInLeft">产品</h1>
            <p class="wow slideInRight">先进产品，贴心服务</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5 wrapper">
      <b-row>
        <b-col md="3" order="0" order-md="0" class="mb-4 wow fadeInUp">
          <b-list-group class="left-menu">
            <b-list-group-item
              class="bg-muted"
              v-for="(item, index) of tabList"
              :key="index"
              :active="active == item.id"
              @click="handleTabClick(item,index)"
              >{{ item.name }}</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col md="9" order="1" order-md="1" class="">
          <b-row class="mx-0">
            <b-col
              lg="4"
              md="6"
              sm="12"
              v-for="(item, ind) of productList"
              :key="ind"
              class="wow fadeInUp"
              :data-wow-delay="0.2 * ind + 's'"
            >
              <b-card img-top class="mb-3">
                <b-card-img
                  class="mx-auto d-block rounded thumbnail"
                  :src="item.icon"
                ></b-card-img>
                <b-card-title class="mx-auto mt-2 text-truncate">{{
                  item.title
                }}</b-card-title>
                <b-card-text class="mx-auto card-body-text text-muted">{{
                  item.desc
                }}</b-card-text>
                <b-button
                  variant="primary"
                  class="mx-auto d-block my-btn"
                  @click="$router.push('/product/' + item.id)"
                  >查看详情</b-button
                >
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
        { id: 99999, name: "全部" },
        { id: 1, name: "智能手持终端" },
        { id: 2, name: "手持打印终端" },
        { id: 3, name: "人脸门禁/车载终端" },
        { id: 4, name: "单/双屏人脸访客终端" },
        { id: 5, name: "PCBA公版" },
        { id: 6, name: "智能通道闸" },
        { id: 7, name: "手持警务终端" },
      ],
      productList: [
        {
          id: 1,
          icon: require("~/static/img/product/product01.jpg"),
          title: "专有云解决方案",
          desc: "专有云解决方案依托于阿里云、数梦工场提供的云计算、大数据、中间件和云安全能力，为用户搭建企业级互联网架构。通过提供集计算、存储、网络于一身的IaaS层基础设施服务，云管理平台、数据、安全统一分布式处理平台，满足用户的中、大型专有云场景需求。",
        },
        {
          id: 2,
          icon: require("~/static/img/product/product02.jpg"),
          title: "混合云解决方案",
          desc: "深圳睿思科信息技术有限公司混合云解决方案深度融合阿里云，结合自身在政企云计算业务技术沉淀，打造出贯通公共云和专有云的解决方案。从业务视角出发，提供基础架构层、数据服务层、应用层、安全能力等多层次的跨云混合。数据服务混合、应用混合和安全能力混合补齐了业界常见的基础架构混合云方案的短板，为用户业务提供全栈混合云能力。",
        },
        {
          id: 3,
          icon: require("~/static/img/product/product03.jpg"),
          title: "大数据解决方案",
          desc: "睿思科大数据解决方案打造了易使用、高性能、低成本、高可靠的解决方案，帮助客户进行大数据运营，挖掘出蕴含在数据当中的价值。底层计算引擎提供海量数据存储和高速计算能力；中层大数据工作台为数据资产的开发、管理、挖掘、服务化提供工具；上层应用通过各种形式发挥数据的价值。",
        },
        {
          id: 4,
          icon: require("~/static/img/product/product04.jpg"),
          title: "数据共享交换解决方案",
          desc: "睿思科数据共享交换平台为用户提供了强大部署服务。平台在架构上基于分布式云架构。数据交换平台将分散建设的若干应用信息系统进行整合，通过构建数据共享交换平台，使若干个应用子系统信息/数据能够传输及共享，提高信息资源的利用率，保证分布异构系统之间互联互通，建立中心数据库，完成数据的抽取、集中、加载、展现，构造统一的数据处理和交换。数据共享交换平台帮助政府和企业打破部门间的数据孤岛，适应于大数据时代的数据交换场景。",
        },
        {
          id: 5,
          icon: require("~/static/img/product/product05.jpg"),
          title: "大数据工作台",
          desc: "数据治理平台帮助企业更好的管理数据资产，集合IT技术人员、系统运维人员、业务用户共同优化企业数据资产。数据治理覆盖整个数据生命周期：产生、流转、加工、使用、销毁，数据治理平台提供全链路的数据管理功能。",
        },
      ],
    };
  },
  mounted() {
    this.active = this.$route.params.id;
    console.log()
    this.getList();
  },
  methods: {
    // 筛选列表
    getList() {
      switch (Number(this.active)) {
        case 0:
          this.list = this.productList;
          break;
        case 1:
          this.list = this.productList.slice(0, 2);
          break;
        case 2:
          this.list = this.productList.slice(2);
      }
      this.$nextTick(() => {
        if (process.browser) {
          new WOW({}).init();
        }
      });
    },
    // 点击筛选
    handleTabClick(item, index) {
      if (index == 0) {
        this.$router.push({ path: "/category" });
      } else if (this.$route.params.id != item.id) {
        this.$router.push( `/category/${item.id}`);
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
}
.card ::v-deep .card-body {
  padding: 4px !important;
}

.card:hover {
  // background: #F1F1F1;
  box-shadow: 0 0 10px #ccc;
}
.card-body-text {
  max-height: 102px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
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
