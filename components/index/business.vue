<template>
  <my-slot :title="title" :desc="desc" :showBgColor="false">
    <b-row class="mx-0">
      <b-col lg="4" md="6" sm="12"
        v-for="(item, ind) of productList"
        :key="ind"
        class="wow fadeInUp"
        :data-wow-delay="(0.2 * ind) + 's'"
      >
        <b-card img-top class="my-2">
          <b-card-img class="w-90 mx-auto d-block rounded thumbnail " height="300"  :src="item.icon"></b-card-img>
          <b-card-title class="w-90 mx-auto mt-2 text-truncate">{{item.title}}</b-card-title>
          <b-card-text class="w-90 mx-auto card-body-text text-muted">{{item.desc}}</b-card-text>
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
import MySlot from '@/components/slot/index'

export default {
  components: {
    MySlot
  },
  data() {
    return {
      title: '行业应用',
      desc: '睿思科信息技术有限公司是优秀产品供应商及整体解决方案提供商和专业技术服务商。',
      productList: [
        {id: 1, icon: require('~/static/img/home/case01.jpeg'), title: '零售', desc: '通过采用手持终端，对入库商品进行智能化核对、统计及数据上报等，精准、快速、智能地完成统计入库操作。'},
        {id: 2, icon: require('~/static/img/home/case02.jpg'), title: '访客/道闸', desc: '通过采用访客终端，对来访人员进行智能化识别，核对，授权，精准、快速，实现更好的访客管理'},
        {id: 3, icon: require('~/static/img/home/case03.jpeg'), title: '公共事业', desc: 'ETC自动收费时，经常会因为设备故障，导致无法扣费，车辆无法正常通过。手持ETC终端不仅可以支持ETC应急收费，还可以进行ETC充值/消费、ETC设备发行、ETC卡片发行、ETC智慧停车等。'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  border: none;
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
