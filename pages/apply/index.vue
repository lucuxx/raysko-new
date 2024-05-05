<template>
  <section class="section-wrap">
    <div class="empty-nav"></div>
    <div class="container mx-auto">
      <div class="form-wrap">
        <div class="form-wrap-title">
          <h3>样机借用</h3>
          <p>申请睿思科样机，需填写如下信息：</p>
        </div>
        <b-form @submit="onSubmit">
          <b-row>
            <b-col cols="6">
              <b-form-group
                label-cols-md="4"
                label-cols-lg="2"
                description=""
                label="公司名称"
              >
                <b-form-input
                  class="mb-4"
                  v-model="form.company"
                  name="公司名称"
                  placeholder="公司名称"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                label-cols-md="4"
                label-cols-lg="2"
                description=""
                label="姓名"
                class="was-required"
              >
                <b-form-input
                  class="mb-4 was-validated"
                  v-model="form.name"
                  name="姓名"
                  placeholder="姓名"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <b-form-group
                label-cols-md="4"
                label-cols-lg="2"
                description=""
                label="联系电话"
                class="was-required"
              >
                <b-form-input
                  class="mb-4 was-validated"
                  v-model="form.phone"
                  name="联系电话"
                  placeholder="联系电话"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                label-cols-md="4"
                label-cols-lg="2"
                description=""
                label="联系邮箱"
              >
                <b-form-input
                  class="mb-4"
                  v-model="form.email"
                  name="联系邮箱"
                  placeholder="邮箱地址"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <b-form-group
                label-cols-md="4"
                label-cols-lg="2"
                description=""
                label="公司地址"
              >
                <b-form-input
                  class="mb-4"
                  v-model="form.address"
                  name="公司地址"
                  placeholder="公司地址"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                label-cols-md="4"
                label-cols-lg="2"
                description=""
                label="对接业务员"
              >
                <b-form-input
                  class="mb-4"
                  v-model="form.contactPerson"
                  name="对接业务员"
                  placeholder="对接业务员姓名"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-button type="submit" block variant="primary">提 交</b-button>
        </b-form>
      </div>
    </div>
  </section>
</template>

<script>
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  layout: "Apply",
  data() {
    return {
      form: {
        company: "",
        name: "",
        phone: "",
        emial: "",
        address: "",
        contactPerson: "",
      },
    };
  },

  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({mobile: false}).init();
    }
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="scss" scoped>
.empty-nav {
  background: #001220;
  height: $header-height;
}
.form-wrap {
  padding: 120px 20px;
  &-title {
    margin: auto;
  }
}
</style>
