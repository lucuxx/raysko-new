<template>
  <section class="concat">
    <!-- <div class="container"> -->

    <b-container>
      <b-row>
        <b-col lg="2" sm="10" md="10" xs="10">
          <dl>
            <dt class="title mb-2">产品中心</dt>
            <dd>手持终端</dd>
            <dd>打印手持终端</dd>
            <dd>UHF RFID终端</dd>
            <dd>人脸访客终端</dd>
            <dd>PCBA主板</dd>
            <dd>警务通终端</dd>
          </dl>
        </b-col>

        <b-col lg="2" sm="10" md="10" xs="10">
          <dl>
            <dt class="title mb-2">服务与支持</dt>
            <dd>维修服务</dd>
            <dd>产品文档</dd>
          </dl>
        </b-col>

        <b-col lg="2" sm="10" md="10" xs="10">
          <dl>
            <dt class="title mb-2">业务领域</dt>
            <dd>智慧物流</dd>
            <dd>零售连锁</dd>
            <dd>医疗卫生</dd>
            <dd>金融POS</dd>
            <dd>公用事业</dd>
          </dl>
        </b-col>

        <b-col lg="2" sm="10" md="10" xs="10">
          <dl>
            <dt class="title mb-2">关于我们</dt>
            <dd>公司介绍</dd>
            <dd>发展历程</dd>
            <dd>企业文化</dd>
            <dd>联系我们</dd>
          </dl>
        </b-col>

        <b-col lg="4" sm="10" xs="10" md="10">
          <dl>
            <!-- <dt class="title mb-2">关注我们</dt> -->
            <dd>
              <font-awesome-icon size="lg" :icon="['fas', 'phone']" />
              13798209586
            </dd>
            <dd>
              <font-awesome-icon size="lg" :icon="['fas', 'envelope']" />
              xiongpeng0809@raysko.cn
            </dd>
            <dd>
              <font-awesome-icon size="lg" :icon="['fas', 'compass']" />
              深圳市宝安区兴业路2005号广兴源互联网创意园C栋509
            </dd>
            <dd>
              <font-awesome-icon size="lg" :icon="['fas', 'globe']" />
              www.raysko.com
            </dd>
            <br />
            <b-img
              :src="require('~/static/img/footer/lianxi.jpeg')"
              height="100"
            ></b-img>
          </dl>
        </b-col>
      </b-row>
      <br />
      <div class="divider"></div>
      <div class="title">欢迎在线咨询</div>
      <br />
      <b-row align-v="center">
        <b-col lg="6" sm="10" xs="10" md="10" class="wow slideInRight">
          <b-form @submit="onSubmit">
            <b-form-input
              class="mb-4"
              v-model="form.name"
              name="发信人姓名"
              required
              placeholder="您的姓名"
            ></b-form-input>
            <b-form-input
              class="mb-4"
              v-model="form.phone"
              required
              name="发信人联系方式"
              placeholder="您的手机/邮箱"
            ></b-form-input>
            <b-form-textarea
              class="mb-4"
              v-model="form.message"
              required
              name="发信人留言"
              placeholder="您的留言"
            ></b-form-textarea>
            <b-button type="submit" variant="primary">提 交</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return { form: { name: "", phone: "", message: "" } };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style lang="scss" scoped>
.concat {
  width: 100%;
  padding: 50px 0;
  background: $foot-color;
  // background-image: url("~/static/img/footer/footer-bg.png");
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;

  dd {
    color: #ffffff99;
  }
  .title {
    font-size: 16px;
    color: #fff;
  }
}
.divider {
  height: 2px;
  width: 100%;
  background: #fff;
  margin: 20px 0;
}
</style>
