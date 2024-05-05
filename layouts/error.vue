<template>
  <div>
    <div class="empty-nav"></div>
    <div class="content">
      <b-img
        v-if="error.statusCode === 404"
        fluid
        :src="require('~/static/img/404.png')"
      ></b-img>
      <h1 v-if="error.statusCode === 404">哎呀，页面丢失了...</h1>
      <h1 v-else>应用发生错误异常</h1>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
<style lang="scss" scoped>
.content {
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.empty-nav {
  background: #001220;
  height: $header-height;
}
</style>
