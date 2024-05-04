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
          heading: '智能手持终端',
          desc1: '公司自主研发的各类移动智能手持终端功能齐全。一维码、二维码、RFID、GPS、指纹识别、身份证读取，护照读取，ETC读取等功能由客户自主选择搭配，同时，也支持按需定制。睿思科手持终端目前广泛应用于物流和快递，零售连锁，医疗卫生，金融，电力，政府和公用事业。',
          desc2: ' '
        },
        {
          image: "product2.jpeg",
          heading: '安卓工控主板方案',
          desc1: '公司自主研发的安卓工控主板方案广泛应用于大型广告机、教育视频终端、触摸一体机,人脸识别终端，人证核验终端等设备。',
          desc2: ' '
        },
        {
          image: "product3.png",
          heading: '人脸识别终端',
          desc1: '公司自主研发的人脸识别终端广泛应用于访客机，刷脸支付设备，身份证核验终端',
          desc2: ' '
        }
      ]
    })
  }
</script>

<template>
  <section class="my-5">
    <SectionHeading heading="" content=""/>

  <b-container class="homeabout">
      <b-row class="align-items-center py-5 wow fadeInUp" v-for="(items, index) in homeabout" :key="index">
        <b-col cols="12" sm="6">
          <Heading :level="3">{{ items.heading }}</Heading>
          <p>{{ items.desc1 }}</p>
          <p>{{ items.desc2 }}</p>
          <Btn to="/category">查看更多</Btn>
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
      max-width: 400px;
    }
    img {
      border-radius: 69% 37% 50% 50%/70% 68% 32% 30%;
      height: 400px;
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
