<template>
  <section>
    <div class="mobile-auto d-block d-md-none"></div>
    <div class="header-content spin-content">
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <h1 class="wow slideInLeft">服务与支持</h1>
            <p class="wow slideInRight">贴心的服务,让您没有后顾之忧</p>
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-sm p-3 mb-5 bg-white rounded">
      <div class="container bar" ref="nav">
        <nuxt-link
          class="bar-item py-2"
          v-for="(item, index) of list"
          :key="index"
          :class="{ active: item.link === $route.path }"
          :to="item.link"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="container py-2">
      <nuxt-child />
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      list: [
        { link: "/service/repair", name: "维修服务" },
        { link: "/service/document", name: "产品文档" },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.header-content {
  background: url("~/static/img/banner/banner02_big.jpg") center center
    no-repeat;
  background-size: cover;
  // background-attachment: fixed;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
  // font-weight: 600;
  color: #333;
  .bar-item {
    cursor: pointer;
    color: #333;
    position: relative;
    text-align: center;
    border-bottom:3px solid transparent;

    &::before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: -5px;
      right: -5px;
      width: inherit;
      height: 3px;

      background-color: $primary-color;
      transform: scale(0);
      transition: all 0.4s linear;
    }

    &:hover {
      color: $theme-color;

      &::before {
        transform: scale(1);
      }
    }
    &.active {
      color: $theme-color;
      border-bottom: 3px solid $primary-color;
    }
  }
}
</style>
