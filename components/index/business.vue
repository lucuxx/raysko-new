<template>
  <my-slot title="" desc="" :showBgColor="false">
    <b-row class="mx-0">
      <b-col
        lg="3"
        md="6"
        sm="12"
        v-for="(item, ind) of productList"
        :key="ind"
        class="wow fadeInUp"
        :data-wow-delay="0.2 * ind + 's'"
      >
        <b-card img-top class="my-2" align="left">
          <b-img
            class="d-block rounded thumbnail"
            height="80"
            width="60"
            :src="item.icon"
          ></b-img>
          <br />
          <br />
          <br />
          <b-card-title class="w-90 mx-auto mt-2 text-truncate">{{
            item.title
          }}</b-card-title>
          <b-card-text class="w-90 mx-auto card-body-text text-muted">{{
            item.desc
          }}</b-card-text>
          <!-- <b-button
            variant="outline-secondary"
            squared
            class="mx-auto d-block my-btn"
            @click="$router.push('/business/' + item.id)"
          >了解更多</b-button> -->
        </b-card>
      </b-col>
    </b-row>
  </my-slot>
</template>

<script>
import MySlot from "@/components/slot/index";

export default {
  components: {
    MySlot,
  },
  data() {
    return {
      title: "行业应用",
      desc: "睿思科信息技术有限公司是优秀产品供应商及整体解决方案提供商和专业技术服务商。",
      productList: [
        {
          id: 1,
          icon: require("~/static/img/home/wang_4.png"),
          title: "定制服务",
          desc: "优秀服务团队",
        },
        {
          id: 2,
          icon: require("~/static/img/home/wang_5.png"),
          title: "数据集成",
          desc: "硬件集成方案",
        },
        {
          id: 3,
          icon: require("~/static/img/home/wang_6.png"),
          title: "产品保障",
          desc: "产品性能强大",
        },
        {
          id: 4,
          icon: require("~/static/img/home/wang_7.png"),
          title: "售后服务",
          desc: "提供售后支持",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  // border: none;
  border-radius: 0;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
