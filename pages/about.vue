<template>
  <section>
    <div class="mobile-auto d-block d-md-none"></div>
    <div class="header-content spin-content">
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <h1 class="wow slideInLeft">关于我们</h1>
            <p class="wow slideInRight">值得信赖的伙伴，为您提供优质的服务</p>
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
        { link: "/about/company", name: "公司简介" },
        { link: "/about/course", name: "发展历程" },
        { link: "/about/culture", name: "企业文化" },
        { link: "/about/contact", name: "联系我们" },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.header-content {
  background: url("~/static/img/banner/inside-banner1.jpeg") center center
    no-repeat;
  background-size: cover;
  // background-attachment: fixed;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
  font-weight: 600;
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
