<template>

  <section class="concat">

    <!-- <div class="container"> -->

    <b-container>

      <b-row>

        <b-col lg="4" sm="10" md="10" xs="10">

          <dl>

            <dt class="title mb-2">关于公司</dt>

            <dd>

              <b-img
                :src="require('~/assets/img/logo2.png')"
                height="50"
              ></b-img>

            </dd>

            <dd>深圳睿思科信息技术有限公司</dd>

            <dd>www.raysko.com</dd>

          </dl>

        </b-col>

        <b-col lg="6" sm="10" md="10" xs="10">

          <dl>

            <dt class="title mb-2">联系我们</dt>

            <dd>地址： 深圳市宝安区兴业路2005号广兴源互联网创意园C栋509</dd>

            <dd>电话： 熊先生 13798209586</dd>

            <dd>邮箱： xiongpeng0809@raysko.cn</dd>

          </dl>

        </b-col>

        <b-col lg="2" sm="10" xs="10" md="10">

          <dl>

            <dt class="title mb-2">关注我们</dt>

            <dd></dd>

            <b-img
              :src="require('~/static/img/footer/lianxi.jpg')"
              height="100"
            ></b-img>

          </dl>

        </b-col>

      </b-row>

    </b-container>

  </section>

</template>

<script>
 export default { data() { return { form: { name: '', phone: '', message: '' } }
}, methods: { } }
</script>

<style lang="scss" scoped>
.concat {
  width: 100%;
  padding: 50px 0;
  background-image: url("~/static/img/footer/footer-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  // background-size: cover;

  dd {
    color: #ffffff99;
  }
  .title {
    font-size: 16px;
    color: #fff;
  }
}
</style>

