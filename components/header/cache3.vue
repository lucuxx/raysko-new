<template>
  <header
    ref="header"
    class="header"
    :class="{ 'active-header': showNavbarBg }"
  >
    <div>
      <b-img height="50" :src="require('~/assets/img/logo2.png')" alt="" />
    </div>

    <!-- 导航 -->
    <nav class="nav-bar">
      <ul class="nav">
        <li v-for="(nav, index) in navList" :key="index">
          <div class="nav-item" :class="{ 'active-background': showNavbarBg }">
            <div
              class="nav-item-title"
              @click="handleNavbarClick()"
              @mouseenter="handleNavbarEnter(nav, '', $event)"
            >
              <nuxt-link
                :class="{ active: routePath == nav.link }"
                :to="nav.link"
                class= "font-monospace"
              >
                {{ nav.name }}</nuxt-link
              >
            </div>
            <!-- 下拉菜单 -->
            <no-ssr>
              <template v-if="isSubNav">
              <div
                v-if="nav.children && nav.link !== '/product'"
                class="test-dropdown-content"
              >
                <div class="test-dropdown-menu">
                  <div
                    v-for="(navChildren, navChildrenIndex) in nav.children"
                    class="test-menuItem"
                    :key="navChildrenIndex"
                    @click="handleSubNavbarClick(navChildren,navChildrenIndex,$event)"
                  >
                    <nuxt-link :to="navChildren.link" tag="li">{{
                      navChildren.name
                    }}</nuxt-link>
                  </div>
                </div>
              </div>
            </template>
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

    <!-- 下拉菜单 -->
    <no-ssr>
      <div
        v-if="currentChildren.length && isProduct"
        class="custom-dropdown-content"
        @mouseleave="handleNavbarLeave()"
      >
        <div class="custom-dropdown-menu">
          <div
            v-for="(navChildren, navChildrenIndex) in currentChildren"
            :key="navChildrenIndex"
            class="custom-menuItem"
          >
            <nuxt-link :to="navChildren.link" tag="li">{{
              navChildren.name
            }}</nuxt-link>
            <br />
            <div v-for="(children, index) in navChildren.children" :key="index">
              <div class="menuItem">
                <b-img
                  :src="require('~/static/img/product/product.png')"
                  height="30"
                ></b-img>
                &nbsp;&nbsp;{{ children.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </no-ssr>
  </header>
</template>

<script>
import NavBar from "@/components/header/NavBar.vue";
export default {
  name: "MyHeader",
  components: { NavBar },
  data() {
    return {
      navIndex: 0,
      showNavbarBg: false,
      navList: [
        { name: "首页", link: "/" },
        { name: "产品", link: "/category" },
        {
          name: "产品中心",
          link: "/product",
          children: [
            {
              name: "手持终端",
              link: "/solution/bank",
              children: [
                { name: "R366" },
                { name: "R366A（大电池厚款）" },
                { name: "R366C（UHF）" },
                { name: "R350C" },
                { name: "R606" },
                { name: "R530C" },
              ],
            },
            {
              name: "手持打印终端",
              link: "/solution/bank",
              children: [{ name: "R800C" }],
            },
            {
              name: "人脸门禁/车载终端",
              link: "/solution/bank",
              children: [{ name: "R900C" }],
            },
            {
              name: "PCBA公版",
              link: "/solution/bank",
              children: [{ name: "R450" }, { name: "R290B" }],
            },
            {
              name: "双屏/单屏人脸访客终端",
              link: "/solution/bank",
              children: [{ name: "R8" }, { name: "R7" }],
            },
            {
              name: "双屏/壁挂机",
              link: "/solution/bank",
              children: [{ name: "R6" }],
            },
          ],
        },
        // { name: "用户案例", link: "/example" },
        { name: "解决方案", link: "/business" },
        {
          name: "关于我们",
          link: "/about",
          children: [
            { name: "公司介绍", link: "/about" },
            { name: "发展历程", link: "/about" },
            { name: "企业文化", link: "/about" },
            { name: "联系我们", link: "/about" },
          ],
        },
      ],
      routePath: "",
      isCollapse: true,
      currentChildren: [],
      isProduct: false,
      isSubNav: false
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
    this.$nextTick(() => {
      this.getHeaderHeight();
    });
    window.addEventListener("scroll", this.handleWindowScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  },
  methods: {
    // 导航栏点击事件
    handleNavbarClick() {
      this.currentChildren = [];
      this.showNavbarBg = false;
      this.isSubNav = false
    },
    handleSubNavbarClick(item, index, bvEvt) {
      this.$store.commit("setSubNavIndex", index + 1);
      this.isSubNav = false
    },
    handleNavbarEnter(item, index, bvEvt) {
      if (item.link === "/product") {
        this.currentChildren = item?.children ?? [];
        this.isProduct = true;
      } else {
        this.currentChildren = [];
        this.isProduct = false;
      }
      this.isSubNav = true
    },
    handleNavbarLeave() {
      this.currentChildren = [];
    },
    // 监听窗口滚动，改变导航背景色
    handleWindowScroll(e) {
      const myTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const flag = myTop > 30;
      if (this.showNavbarBg != flag) {
        this.showNavbarBg = flag;
      }
    },
    // 获取导航栏高度
    getHeaderHeight() {
      const headerHeight = this.$refs.header.clientHeight;
      this.$store.commit("setHeaderHeight", headerHeight);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index: 999;
  padding: 0 10%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  &:hover {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    .nav-item {
      a {
        display: block;
        color: #333;
      }
    }
  }
}
.header-white {
  height: $header-height;
}

.active-header {
  background-color: #fff;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  color: $theme-color;
  transition: all 0.3s;
}
</style>

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
  list-style-type: none;
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
      height: $header-height;
    }

    .nav-item-title {
      display: block;
      // height: inherit;
      margin-bottom: 4px;
      width: inherit;
      font-weight: 600;

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
        color: $primary-color !important;

        &::before {
          transform: scale(1);
        }
      }
    }
    &:hover .test-dropdown-content {
      display: block;
    }
  }
  // 下拉菜单
  .test-dropdown-content {
    display: none;
    position: absolute;
    top: $header-height; // 为导航栏高度
    left: -30px; // 设置为0, 不然会直接定位到父元素下方
    right: -30px;
    // height: 0; // 下拉初始高度
    overflow: hidden;
    transition: 0.4s;
    background-color: $white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);

    .test-dropdown-menu {
      padding: 10px 8px 15px;
      background-color: #fff;
      border-radius: 4px;

      .test-menuItem {
        width: 100%;
        white-space: nowrap;
        padding: 0 16px;
        font-size: 14px;
        line-height: 30px;
        color: #333;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #ccc;
          color: $theme-color;
        }
      }
    }
  }
}
.custom-dropdown-content {
  position: fixed;
  display: block;
  top: $header-height; // 为导航栏高度
  left: 0; // 设置为0, 不然会直接定位到父元素下方
  // height: 500px; // 下拉初始高度
  right: 0;
  width: 100vw;
  overflow: hidden;
  background-color: $white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  .custom-dropdown-menu {
    padding: 10px 50px;
    color: #fff;
    background-color: #fff;
    // border-radius: 4px;
    border-top: 1px solid rgba(173, 166, 166, 0.5);
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .custom-menuItem {
      width: 100%;
      text-align: left;
      white-space: nowrap;
      padding: 0 16px;
      font-size: 14px;
      line-height: 30px;
      color: #333;
      font-weight: 600;
      padding-left: 10px;
      // border-right:1px solid rgba(173, 166, 166, 0.5);
      .menuItem {
        width: 100%;
        text-align: left;
        line-height: 30px;
        margin-bottom: 10px;
        white-space: nowrap;
        color: #333;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: $theme-color;
          // background-color: #ccc;
        }
      }
    }
  }
}

.nav .active-background {
  // .nav .nav-item .nav-item-title .active
  a {
    color: #333;
  }
  .active {
    color: $theme-color !important;
  }
}
</style>
