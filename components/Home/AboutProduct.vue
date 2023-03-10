<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Button/Button.vue'
import SectionHeading from '~/components/SectionHeading'
  export default {
    components: {
      Heading,
      Btn,
      SectionHeading
    },
    data: () => ({
    homeabout: [
        {
          image: "product1.png",
          heading: 'PDA手持终端',
          desc1: '移动智能数据终端，移动智能支付终端，金融POS，手持数据采集器，移动警务通，手持工业终端，RFID手持机，RFID超高频终端，工业PDA，物流扫描巴枪，移动手持终端',
          desc2: ' '
        },
        {
          image: "product2.jpeg",
          heading: '主板方案',
          desc1: 'RK3399, RK3288',
          desc2: ' '
        },
        {
          image: "product3.png",
          heading: '人脸识别终端',
          desc1: '访客机，刷脸支付设备，身份证核验终端',
          desc2: ' '
        }
      ]
    })
  }
</script>

<template>
  <section class="my-5">
    <SectionHeading heading="主营板块" content=""/>

  <b-container class="homeabout">
      <b-row class="align-items-center py-5 wow fadeInUp" v-for="(items, index) in homeabout" :key="index">
        <b-col cols="12" sm="6">
          <Heading :level="3">{{ items.heading }}</Heading>
          <p>{{ items.desc1 }}</p>
          <p>{{ items.desc2 }}</p>
          <Btn to="/about">查看更多</Btn>
        </b-col>
        <b-col cols="12" sm="6">
          <div class="side-image-wrapper">
            <b-img fluid :src="`img/home/${items.image}`" class="" alt="" />
          </div>
        </b-col>
      </b-row>
  </b-container>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homeabout {
  .row:nth-child(even) {
    flex-direction: row-reverse;
  }
}
.side-image-wrapper {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 70%;
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 69% 37% 50% 50%/70% 68% 32% 30%;
      background-color: #f5f5f5;
      top: 10%;
      left: 10%;
      z-index: -1;
      max-width: 500px;
    }
    img {
      border-radius: 69% 37% 50% 50%/70% 68% 32% 30%;
      height: 500px;
      object-fit: cover;
      width: auto;
      margin: 0 auto;
      display: block;

      @media screen and (max-width: 767px) {
        height: 380px;
      }
    }
}
</style>
