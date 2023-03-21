<template>
  <nav class="nav-bar">
    <ul class="nav">
      <li v-for="(nav, index) in navList" :key="index">
        <div class="nav-item" :class="{ 'active-background': showNavbarBg }">
          <div class="nav-item-title">
            <nuxt-link
              :class="{ active: routePath == nav.link }"
              :to="nav.link"
            >
              {{ nav.name }}</nuxt-link
            >
          </div>
          <!-- 下拉菜单 -->
          <no-ssr>
            <div v-if="nav.children" class="custom-dropdown-content">
              <div class="custom-dropdown-menu">
                <div
                  v-for="(navChildren, navChildrenIndex) in nav.children"
                  class="custom-menuItem"
                  :key="navChildrenIndex"
                >
                  <nuxt-link :to="navChildren.link" tag="li">{{
                    navChildren.name
                  }}</nuxt-link>
                </div>
              </div>
            </div>
          </no-ssr>
        </div>
      </li>
    </ul>
    <!-- 移动端 -->
    <ul class="nav-m" :class="{ collapse: isCollapse }">
      <li v-for="(nav, index) in navList" :key="index">
        <nuxt-link :class="{ active: routePath == nav.link }" :to="nav.link"
          >{{ nav.name }}
        </nuxt-link>
      </li>
    </ul>
    <button @click="isCollapse ? (isCollapse = false) : (isCollapse = true)">
      三
    </button>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      routePath: "",
      isCollapse: true,
      showNavbarBg: false
    };
  },
  watch: {
    $route: {
      immediate: true, //加上此配置之后，watch即可以在首次进入或刷新之后执行handler （），即初始化即可执行监听
      handler(to, from) {
        //监听之后执行的回调
        this.routePath = to.path;
      },
    },
  },


  mounted() {
    this.routePath = this.$route.path;

    window.addEventListener("scroll", this.handleWindowScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    // 监听窗口滚动，改变导航背景色
    handleWindowScroll(e) {
      const myTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const flag = myTop > 60;
      if (this.showNavbarBg != flag) {
        this.showNavbarBg = flag;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  .nav-bar {
    .nav {
      display: none !important;
    }

    .nav-m {
      display: block !important;
    }

    button {
      display: block !important;
    }
  }
}

.nav-m {
  position: absolute;
  z-index: 99;
  background-color: #fff;
  left: 0;
  right: 0;
  top: $header-height;
  padding: 1rem;
  overflow: hidden;
  a {
    padding: 0.8rem 1rem;
    display: inline-block;
  }

  .active {
    color: $primary-color;
  }
}

.nav-bar {
  .nav-m {
    display: none;
  }

  button {
    display: none;
  }
}

.nav {
  display: flex;
  width: 100%;
  height: $header-height;
  line-height: $header-height;

  .nav-item {
    margin: 0 20px;
    cursor: pointer;
    position: relative;

    // transition: all 0.3s linear;
    a {
      display: block;
      color: $white;
    }

    .nav-item-title {
      display: block;
      height: inherit;
      width: inherit;
      font-weight: 600;
      // .a {
      //   color:$black !important;
      // }

      .active {
        color: $theme-color;
        border-bottom: 2px solid $primary-color;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: 0px;
        left: -5px;
        right: -5px;
        width: inherit;
        height: 2px;
        // width: 100%;
        background-color: $primary-color;
        transform: scale(0);
        transition: all 0.4s linear;
      }

      &:hover {
        color: $primary-color;

        &::before {
          transform: scale(1);
        }
      }
    }

    &:hover .custom-dropdown-content {
      // height: 150px !important;
      display: block;
      transition: 0.6s;
    }
  }

  // 下拉菜单
  .custom-dropdown-content {
    position: fixed;
    display: none;
    top: $header-height; // 为导航栏高度
    left: 0; // 设置为0, 不然会直接定位到父元素下方
    // height: 0px; // 下拉初始高度
    right:0;
    width: 100vw;
    overflow: hidden;
    background-color: $white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);

    .custom-dropdown-menu {
      padding: 10px 8px 15px;
      color: #fff;
      background-color: #fff;
      // border-radius: 4px;
      border-top: 1px solid rgba(173, 166, 166, 0.5);

      .custom-menuItem {
        width: 100%;
        height: 42px;
        white-space: nowrap;
        padding: 0 16px;
        font-size: 16px;
        line-height: 42px;
        color: #333;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 4px;

        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
}

.active-background{
  a {
      display: block;
      color:$black
  }
}
</style>
