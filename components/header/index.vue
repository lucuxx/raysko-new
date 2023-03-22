<template>
  <header
    ref="header"
    class="header"
    :class="{ 'active-header': showNavbarBg }"
  >
    <b-row class="container mx-auto">
      <b-col cols="2" class="header-style">
        <b-img height="50" :src="require('~/assets/img/logo2.png')" alt="" />
      </b-col>
      <b-col cols="8" class="mx-auto">
        <!-- 导航 -->
        <div class="custom-nav-bar">
          <ul class="custom-nav">
            <li v-for="(nav, index) in navList" :key="index">
              <div
                class="custom-nav-item"
                :class="{ 'active-background': showNavbarBg }"
              >
                <div
                  class="custom-nav-item-title"
                  @click="handleNavbarClick()"
                  @mouseenter="handleNavbarEnter(nav, '', $event)"
                >
                  <nuxt-link
                    :class="{ active: routePath == nav.link }"
                    :to="nav.link"
                    class="font-monospace"
                  >
                    {{ nav.name }}</nuxt-link
                  >
                </div>
                <!-- 下拉菜单 -->
                <client-only>
                  <template v-if="isSubNav">
                    <div
                      v-if="nav.children && nav.link !== '/category'"
                      class="test-dropdown-content"
                    >
                      <div class="test-dropdown-menu">
                        <div
                          v-for="(
                            navChildren, navChildrenIndex
                          ) in nav.children"
                          class="test-menuItem"
                          :key="navChildrenIndex"
                          @click="
                            handleSubNavbarClick(
                              navChildren,
                              navChildrenIndex,
                              $event
                            )
                          "
                        >
                          <nuxt-link :to="navChildren.link" tag="li">{{
                            navChildren.name
                          }}</nuxt-link>
                        </div>
                      </div>
                    </div>
                  </template>
                </client-only>
              </div>
            </li>
          </ul>
          <!-- 移动端 -->
          <!-- <ul class="nav-m" :class="{ collapse: !isCollapse }">
        <li v-for="(nav, index) in navList" :key="index">
          <nuxt-link :class="{ active: routePath == nav.link }" :to="nav.link"
            >{{ nav.name }}
          </nuxt-link>
        </li>
      </ul> -->
        </div>
      </b-col>
      <b-col cols="2">
        <div class="custom-button" @click="handleToggleBtn()">三</div>
        <div class="custom-site-nav" :class="{ active: isCollapse }">
          <b-nav vertical v-for="(item, index) in navList" :key="index">
            <b-nav-item
              v-if="!item.children"
              style="color: #fff"
              @click="handleMobileNav(item)"
            >
              {{ item.name }}
            </b-nav-item>

            <b-nav-item-dropdown
              v-else
              :text="item.name"
              toggle-class="nav-link-custom"
              right
              block
            >
              <template v-slot:button-content>
                <span
                  @click="handleMobileNav(item)"
                  :class="{ active: $route.path.includes(item.link) }"
                  >{{ item.name }}</span
                >
              </template>
              <b-dropdown-item
                @click="handleMobileNav(i)"
                v-for="(i, idx) in item.children"
                :key="idx"
                >{{ i.name }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-nav>
        </div>
      </b-col>
    </b-row>

    <!-- 下拉菜单 -->
    <client-only>
      <div
        v-if="currentChildren.length && isProduct"
        class="container custom-dropdown-content"
        @mouseleave="handleNavbarLeave()"
      >
        <b-row class="row custom-dropdown-menu">
          <b-col lg="3" md="3" sm="3">
            <b-list-group>
              <b-list-group-item
                v-for="(navChildren, navChildrenIndex) of currentChildren"
                :key="navChildrenIndex"
                :active="submenuIndex == navChildrenIndex"
                @mouseenter="handleTabEnter(navChildren, navChildrenIndex)"
                >{{ navChildren.name }}
              </b-list-group-item>
            </b-list-group>
          </b-col>

          <b-col class="wrap-menuItem">
            <div
              v-for="(item, index) in currentChildren[submenuIndex].children"
              :key="index"
              class="menuItem"
              @click="handleToProductClick(item)"
            >
              <b-img
                fluid
                :src="require('~/static/img/product/product.png')"
              ></b-img>
              <div>{{ item.name }}</div>
            </div>
          </b-col>
        </b-row>
      </div>
    </client-only>
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
        // { name: "产品", link: "/category" },
        {
          name: "产品中心",
          link: "/category",
          children: [
            {
              name: "手持终端",
              link: "/category/1",
              children: [
                { id: 1, name: "R366" },
                { id: 1, name: "R366A（大电池厚款）" },
                { id: 1, name: "R366C（UHF）" },
                { id: 1, name: "R350C" },
                { id: 1, name: "R606" },
                { id: 1, name: "R530C" },
              ],
            },
            {
              name: "手持打印终端",
              link: "/category/1",
              children: [{ id: 1, name: "R800C" }],
            },
            {
              name: "人脸门禁/车载终端",
              link: "/category/1",
              children: [{ id: 1, name: "R900C" }],
            },
            {
              name: "PCBA公版",
              link: "/category/1",
              children: [
                { id: 1, name: "R450" },
                { id: 1, name: "R290B" },
              ],
            },
            {
              name: "双屏/单屏人脸访客终端",
              link: "/category/1",
              children: [
                { id: 1, name: "R8" },
                { id: 1, name: "R7" },
              ],
            },
            {
              name: "双屏/壁挂机",
              link: "/category/1",
              children: [{ id: 1, name: "R6" }],
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
      isCollapse: false,
      currentChildren: [],
      isProduct: false,
      isSubNav: false,
      submenuIndex: 0,
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
      this.isSubNav = false;
    },
    handleSubNavbarClick(item, index, bvEvt) {
      this.$store.commit("setSubNavIndex", index + 1);
      this.isSubNav = false;
    },
    handleNavbarEnter(item, index, bvEvt) {
      if (item.link === "/category") {
        this.currentChildren = item?.children ?? [];
        this.isProduct = true;
      } else {
        this.currentChildren = [];
        this.isProduct = false;
      }
      this.submenuIndex = 0;
      this.isSubNav = true;
    },
    handleNavbarLeave() {
      this.currentChildren = [];
    },
    handleTabEnter(item, index) {
      this.submenuIndex = index;
    },
    handleToProductClick(item) {
      this.currentChildren = [];
      this.$router.push(`/product/${item.id}`);
    },
    handleToggleBtn() {
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse, "this.isCollapse");
      if (this.isCollapse) {
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
        document.body.style.position = "relative";
      }
    },
    handleMobileNav(item) {
      this.$router.push(item.link);
      this.handleToggleBtn();
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
  // display: flex;
  // justify-content: center;
  // align-items: center;
  background-color: transparent;
  z-index: 999;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  color: $theme-color;
  &:hover {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    .custom-nav-item {
      a {
        display: block;
        color: #333;
      }
    }
  }
  .header-style {
    line-height: $header-height;
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
@media (max-width: 768px) {
  .custom-nav-bar {
    .custom-nav {
      display: none !important;
    }

    // .nav-m {
    //   display: block !important;
    // }

    // button {

    // }
  }
  .custom-button {
    display: block !important;
  }
  .custom-site-nav {
    display: block !important;
  }
}

// .nav-m {
//   position: fixed;
//   z-index: 1000;
//   background-color: #fff;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
// }
// .collapse {
//   z-index: -100;
// }

.custom-nav-bar {
  height: 100%;
  // overflow: hidden;

  // overflow: hidden;
  .custom-nav-m {
    display: none;
  }

  // button {
  //   display: none;
  // }
}
.custom-button {
  display: none;
  text-align: right;
}
.custom-site-nav {
  display: none;
}

.custom-nav {
  // width: 100%;
  height: $header-height;
  line-height: $header-height;
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding:0 !important;
  // align-items: center;

  .custom-nav-item {
    margin: 0 20px;
    cursor: pointer;
    position: relative;

    // transition: all 0.3s linear;
    a {
      display: block;
      color: $white;
      height: $header-height;
    }

    .custom-nav-item-title {
      display: block;
      // height: inherit;
      margin-bottom: 4px;
      width: inherit;
      font-weight: 600;

      .active {
        color: $theme-color;
        border-bottom: 3px solid $primary-color;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: 0px;
        left: -5px;
        right: -5px;
        width: inherit;
        height: 3px;
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
        text-align: center;
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
  width: 100%;
  overflow: hidden;
  background-color: $white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  .custom-dropdown-menu {
    padding: 6px 0;
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
    }

    .wrap-menuItem {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      height: inherit;
      .menuItem {
        // display: flex;
        // justify-content: flex-start;
        // align-items: center;
        width: 180px;
        height: 240px;
        margin-bottom: 10px;
        margin-right: 10px;
        // text-align: left;
        // white-space: wrap;
        color: #333;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        background: rgba(246, 242, 242, 0.5);
        img {
          width: 180px;
        }
        div {
          width: 100%;
          text-align: center;
          white-space: wrap;
        }
        &:hover {
          color: $theme-color;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
          // background-color: #ccc;
        }
      }
    }
  }
}

.custom-nav .active-background {
  // .nav .nav-item .nav-item-title .active
  a {
    color: #333;
  }
  .active {
    color: $theme-color !important;
  }
}

::v-deep .list-group-item {
  border: none;
  color: #333;
  border-right: 1px solid rgba(173, 166, 166, 0.5);
  border-radius: 0 !important;
}
::v-deep .list-group-item.active {
  background: transparent;
  color: $theme-color;
  border-right: 2px solid $theme-color;
  border-radius: 0;
}
::v-deep .list-group-item:hover {
  cursor: pointer;
  color: $theme-color;
  border-right: 2px solid $theme-color;
  border-radius: 0;
}
</style>
<style lang="scss" scoped>
.custom-site-nav {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: $white;
  width: 100vw;
  height: 100vh;
  transform: translateX(100vw);
  padding-top: $header-height;
  z-index: -1;
  flex-direction: column;
  transition: 0.3s ease-in-out;
  list-style-type: none;
  overflow-y: auto;

  &.active {
    transform: translateX(0px);
  }
}

.custom-button {
  display: none;
  font-size: 20px;
  font-weight: 800;
  line-height: $header-height;
  cursor: pointer;
}

::v-deep .dropdown-menu {
  width: 100%;
  border-radius: 0;
  color: #333 !important;
  position: absolute;
  left: 0;
  right: 0;
  transform: translate3d(0px, 39px, 0px) !important;
  background: rgb(241, 238, 238);
}

::v-deep .dropdown-item {
  padding-top: 6px;
  padding-bottom: 6px;
}
::v-deep .nav-link,
.nav-link-custom {
  color: #333;
}

::v-deep .dropdown-toggle:after {
  float: right;
  padding-top: 4px;
  margin-top: 10px;
}

::v-deep .nav-item {
  border-top: 1px solid rgba(173, 166, 166, 0.5);
  padding: 4px 6px;
}
</style>
