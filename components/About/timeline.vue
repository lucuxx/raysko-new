<template>
  <div>
    <div class="content-wrap">
      <section class="timeline wrapper grid">
        <div class="">
          <div class="timeline__item timeline__item--0">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2013.12</h2>
              <p class="timeline__item__content__description">公司成立</p>
            </div>
          </div>
          <div class="timeline__item timeline__item--1">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2014</h2>
              <p class="timeline__item__content__description">
                公司取得商用密码产品销售许可证
              </p>
              <p class="timeline__item__content__description">
                公司通过ISO9000质量体系认证
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--2">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2015.03</h2>
              <p class="timeline__item__content__description">
                公司发布国内第一个web安全输入控件
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--3">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2015.08</h2>
              <p class="timeline__item__content__description">
                公司发布Venus UI 1.0前端开发平台
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--4">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2015.10</h2>
              <p class="timeline__item__content__description">
                公司发布Athena 2.0分布式微服务平台
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--5">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2015.11</h2>
              <p class="timeline__item__content__description">
                公司被评为高新技术企业
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--6">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2015.12</h2>
              <p class="timeline__item__content__description">
                公司与昆山农商行银行签署战略合作伙伴
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--7">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2016.06</h2>
              <p class="timeline__item__content__description">
                公司与昆山农商银行合作打造的KAAP平台通过验收，标志着公司为中国银行业提供专业应用开发平台的能力成熟
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--8">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2017.01</h2>
              <p class="timeline__item__content__description">
                公司发布国内第一个支持微信小程序的Web安全输入控件
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--9">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2017.07</h2>
              <p class="timeline__item__content__description">宁波分公司成立</p>
              <p class="timeline__item__content__description">
                鄞州银行企业网银上线，标志着公司重新定义了中国网银客户端
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--10">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2017.12</h2>
              <p class="timeline__item__content__description">武汉分公司成立</p>
              <p class="timeline__item__content__description">
                公司发布Venus UI 2.0前端开发平台
              </p>
              <p class="timeline__item__content__description">
                公司UX团队独立承接合同成功，标志着市场对公司UX的认可
              </p>
            </div>
          </div>
          <div class="timeline__item timeline__item--11">
            <div class="timeline__item__station"></div>
            <div class="timeline__item__content">
              <h2 class="timeline__item__content__date">2018</h2>
              <p class="timeline__item__content__description">
                不忘初心，砥砺奋进
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import Heading from "~/components/Heading.vue";
// import Btn from "~/components/Button/Button.vue";

if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  components: {
    // Heading,
    // Btn,
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
// .global-parallax {
//   background: url("~static/img/home/home1.jpg") center center no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
//   position: relative;
//   &:after {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     background: rgba($white, 0.5);
//     z-index: 0;
//   }
//   > * {
//     z-index: 1;
//     position: relative;
//   }
// }
.content-wrap {
  // padding: 20px;
  // background: #333;
  border-radius: 10px;
  padding-bottom: 20px;

  /* _wrapper.css */
  .wrapper {
    // padding-left: 18px;
    // padding-right: 18px;
    max-width: 1236px;
    margin-left: auto;
    margin-right: auto;
  }

  /* _timeline.css */
  .timeline {
    position: relative;
    margin: 10px auto;
    // margin-top: 0;
    // padding: 0px 0;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10%;
    width: 2px;
    height: 100%;
    // background-color: rgba(255, 255, 255, 0.35);
    background: $color-heading;
  }

  @media (min-width: 768px) {
    .timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }
  @media (min-width: 576px) {
    .timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }

  .timeline__item {
    margin-bottom: -30px;
    position: relative;
  }
  @media (max-width: 576px) {
    .timeline__item {
      margin-bottom: 20px;
    }
  }
  .timeline__item::after {
    content: "";
    clear: both;
    display: table;
  }

  .timeline__item:nth-child(2n) .timeline__item__content {
    float: right;
    // background: #8287a9;
    background: $white;
  }

  .timeline__item:nth-child(2n) .timeline__item__content::before {
    content: "";
    right: 40%;
    display: block;
    height: 2px;
    background: $color-heading;
  }

  @media (min-width: 768px) {
    .timeline__item:nth-child(2n) .timeline__item__content::before {
      left: inherit;
      // background: #8287a9;
      background: $white;
    }
  }
  @media (min-width: 576px) {
    .timeline__item:nth-child(2n) .timeline__item__content::before {
      left: inherit;
      display: block;
      height: 2px;
      background: $color-heading;
    }
  }

  .timeline__item:nth-child(2n) .timeline__item__content__date {
  }

  .timeline__item:nth-child(2n) .timeline__item__content__description {
    // color: #fff;
    color: $color-text-dark;
  }

  .timeline__item:last-child {
    margin-bottom: 0;
  }

  .timeline__item-bg {
    -webkit-transition: all 1s ease-out;
    transition: all 1s ease-out;
    color: #fff;
  }

  /*.timeline__item-bg:nth-child(2n) .timeline__item__station {*/
  /*background-color: #b292c5;*/
  /*}*/
  /*.timeline__item-bg:nth-child(2n) .timeline__item__content {*/
  /*background-color: #61BC46;*/
  /*}*/

  /*.timeline__item-bg:nth-child(2n) .timeline__item__content::before {*/
  /*background-color: #fff;*/
  /*}*/

  .timeline__item-bg:nth-child(2n) .timeline__item__content__description {
    color: #fff;
  }

  .timeline__item-bg.current .timeline__item__content {
    background-color: #61bc46;
  }

  .timeline__item-bg .timeline__item__content__description {
    color: #fff;
  }

  .timeline__item__station {
    background-color: #9aa0b9;
    width: 14px;
    height: 14px;
    position: absolute;
    border-radius: 50%;
    /*padding: 0px;*/
    top: 14px;
    left: 8.4%;
    /*margin-left: -33px;*/
    border: 4px solid #fff;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  @media (min-width: 768px) {
    .timeline__item__station {
      left: 49%;
      /*margin-left: -30px;*/
      width: 14px;
      height: 14px;
      padding: 0px;
      border-width: 4px;
      top: 25px;
    }
  }
  @media (min-width: 576px) {
    .timeline__item__station {
      left: 49.3%;
      /*margin-left: -30px;*/
      width: 14px;
      height: 14px;
      padding: 0px;
      border-width: 4px;
      top: 22px;
    }
  }

  .timeline__item__content {
    width: 80%;
    // background: rgba(255, 255, 255, 0.1);
    // background:#8287a9;
    background: $white;
    // border: 1px solid rgba(173, 166, 166, 0.5);
    border: 1px solid $color-blue;
    padding: 20px 30px;
    // border-radius: 8px;
    float: right;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  @media (min-width: 768px) {
    .timeline__item__content {
      width: 40%;
      float: inherit;
      padding: 15px 40px;
    }
  }
  @media (min-width: 576px) {
    .timeline__item__content {
      width: 40%;
      float: inherit;
      padding: 15px 40px;
    }
  }

  .timeline__item__content::before {
    content: "";
    position: absolute;
    left: 10%;
    // background: rgba(255, 255, 255, 0.35);
    background: $color-heading;
    top: 20px;
    width: 10%;
    height: 2px;
    z-index: -1;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  @media (min-width: 768px) {
    .timeline__item__content::before {
      left: 40%;
      top: 30px;
      height: 2px;
      margin-top: -2px;
      width: 10%;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    .timeline__item__content::before {
      left: 40%;
      top: 30px;
      height: 2px;
      margin-top: -2px;
      width: 10%;
    }
  }

  .timeline__item__content__date {
    margin: 0;
    /*padding: 8px 12px;*/
    font-size: 18px;
    margin-bottom: 10px;
    /*background-color: #65adb7;*/
    // color: #ffffff;
    color: $color-text;
    font-size: $base-font-size;
    display: inline-block;
    /*border-radius: 8px;*/
    /*border: 2px solid #fff;*/
  }

  .timeline__item__content__description {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    // color: #fff;
    color: $color-text-dark;
  }

  @media (min-width: 768px) {
    .timeline__item__content__description {
      font-size: 14px;
      line-height: 28px;
    }
  }
  @media (min-width: 576px) {
    .timeline__item__content__description {
      font-size: 14px;
      line-height: 28px;
    }
  }

  /* _site-footer.css */
  .site-footer {
    padding: 50px 0 200px 0;
  }

  .site-footer__text {
    color: #e6e6e6;
    font-size: 14px;
    text-align: center;
  }

  .site-footer__text__link {
    color: #8287a9;
  }
  .about_address {
    color: #ffffff;
    line-height: 35px;
  }
  .about_map {
    height: 300px;
  }

  .portfolio-filter-btn-group .btn-group button {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    color: rgba(255, 255, 255, 0.57);
    background-color: #28292e;
    padding: 10px 20px;
    margin: 20px;
    border: 1px solid rgba(255, 255, 255, 0.35);
  }
  .portfolio-filter-btn-group .btn-group button:hover {
    padding: 10px 20px;
    color: rgba(255, 255, 255, 0.57);
    background-color: #fff;
  }

  @media (max-width: 576px) {
    .portfolio-filter-btn-group .btn-group button {
      padding: 5px 10px;
      margin: 10px;
    }
    .portfolio-filter-btn-group .btn-group button:hover {
      padding: 5px 10px;
      color: rgba(255, 255, 255, 0.57);
      background-color: #fff;
    }
  }
  @media (max-width: 430px) {
    .portfolio-filter-btn-group .btn-group button {
      padding: 2px 5px;
      margin: 0 18px 0;
    }
    .portfolio-filter-btn-group .btn-group button:hover {
      padding: 2px 5px;
      color: rgba(255, 255, 255, 0.57);
      background-color: #fff;
    }
  }
  .about_line_height {
    line-height: 28px;
    text-indent: 30px;
  }
  .about_14 {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.81);
  }
  .about_18 {
    font-size: 18px;
  }
  .about_24 {
    font-size: 24px;
  }
  /*防动画闪烁*/
  // .hidddden {
  //   opacity: 0;
  // }
  .address_btn {
    position: relative;
    width: 25%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (max-width: 576px) {
    .address_btn {
      width: 25%;
    }
  }
  @media (max-width: 430px) {
    .address_btn {
      padding-right: 0;
      padding-left: 0;
      width: 25%;
    }
  }
}
</style>
