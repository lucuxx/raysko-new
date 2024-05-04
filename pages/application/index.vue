<template>
  <section>
    <div class="mobile-auto d-block d-md-none"></div>
    <div class="header-content spin-content">
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <h1 class="wow slideInLeft"></h1>
            <p class="wow slideInRight"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5 wrapper">
      <h1 style="height:200px;text-align:center;"> 开发中。。。 </h1>
    </div>
  </section>
</template>

<script>
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
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
  background: #fcfcfc;
  transition: all 0.4s;
}
.card ::v-deep .card-body {
  padding: 4px !important;
}

.card:hover {
  // background: #F1F1F1;
  transform: scale(1.1, 1.1);

  box-shadow: 0 0 10px #ccc;
  color: $theme-color;
}
.card-body-text {
  max-height: 102px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.title-center {
  text-align: center;
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
::v-deep option {
  width: 100%;
}
</style>
