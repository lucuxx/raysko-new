<template>
    <b-row class="mx-0">
      <b-col lg="4" md="6" sm="12"
        v-for="(item, ind) of productList"
        :key="ind"
        class="wow fadeInUp"
        :data-wow-delay="(0.2 * ind) + 's'"
      >
        <b-card img-top class="my-2" align="center" >
          <b-card-img class="w-90 mx-auto d-block rounded thumbnail" height="250"  :src="item.icon"></b-card-img>
          <br />
          <b-card-title  class="w-90 mx-auto mt-2 text-truncate">{{item.title}}</b-card-title>
          <b-card-text class="w-90 mx-auto card-body-text text-muted">{{item.desc}}</b-card-text>
          <br />
          <br />
          <br />
          <b-button
            variant="outline-primary"
            squared
            class="mx-auto d-block my-btn"
            @click="$router.push('/product/' + item.id)"
          >了解更多</b-button>
          <br />
        </b-card>
      </b-col>
    </b-row>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      title: '行业应用',
      desc: '睿思科信息技术有限公司是优秀产品供应商及整体解决方案提供商和专业技术服务商。',
      productList: [
        {id: "R366", icon: require('~/static/img/home/wang_1.png'), title: '智能手持终端', desc: '采用高通处理器 SDM450 八核1.8Ghz,操作系统为 Android 9.0,内存兼2GB+16GB(可选配4GB+64GB)'},
        {id: "R860", icon: require('~/static/img/home/wang_2.png'), title: '打印一体手持终端', desc: '采用高通处理器 SDM229八核2.4G主频,操作系统为 Android 13,内存4GB+64GB'},
        {id: "R366C", icon: require('~/static/img/home/wang_3.png'), title: 'UHF RFID手持终端', desc: '采用高通处理器 SDM450 八核1.8Ghz,操作系统为 Android 9.0,内存兼2GB+16GB(可选配4GB+64GB)'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  box-shadow: 0 0 10px #ccc;

}
.card:hover {
  // background: #F1F1F1;
  transform: translateY(-6px);
  transition: .5s;
}
.card-body-text {
  max-height: 102px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
