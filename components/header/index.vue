<template>
  <header
    ref="header"
    class="header"
    :class="{ 'active-header': showNavbarBg }"
  >
    <b-row class="container mx-auto">
      <b-col cols="2" class="row header-style">
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
        <div class="custom-button" @click="handleToggleBtn()">
          <div class="mobnav-btn" :class="{ open: isCollapse }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </b-col>
    </b-row>


    <!-- 适配手机导航 -->
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

    <!-- 下拉菜单 -->
    <client-only>
      <div
        v-show="currentChildren.length && isProduct"
        class="custom-dropdown-content "
        @mouseleave="handleNavbarLeave()"
        >
        <b-row class="container mx-auto  custom-dropdown-menu" v-if="currentChildren.length">
          <b-col lg="3" md="3" sm="3" class="row">
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

          <b-col class="row wrap-menuItem">
            <div
              v-for="(item, index) in currentChildren[submenuIndex].children"
              :key="index"
              class="menuItem"
              @click="handleToProductClick(item)"
            >
              <b-img
                fluid
                :src="item.image"
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
                { id: 1, name: "R366",image:require('~/static/img/categorys/R366.jpg')},
                { id: 1, name: "R366A（大电池厚款）",image:require('~/static/img/categorys/R366A.jpg') },
                { id: 1, name: "R350C",image:require('~/static/img/categorys/R350.jpg') },
                { id: 1, name: "R606" ,image:require('~/static/img/categorys/go.png') },
                { id: 1, name: "R530C" ,image:require('~/static/img/categorys/R530C.jpg')},
              ],
            },
            {
              name: "打印手持终端",
              link: "/category/1",
              children: [{ id: 1, name: "R800C",image:require('~/static/img/categorys/R800C.jpg') }],
            },
            {
              name: "UHF RFID手持终端",
              link: "/category/1",
              children: [{ id: 1, name: "R366C（UHF）",image:require('~/static/img/categorys/R366C.jpg') }],
            },
            {
              name: "双屏/单屏人脸访客终端",
              link: "/category/1",
              children: [
                { id: 1, name: "R900P" ,image:require('~/static/img/categorys/R900P.jpg')},
                { id: 1, name: "R8" ,image:require('~/static/img/categorys/R8.jpg')},
                { id: 1, name: "R7" ,image:require('~/static/img/categorys/R7.jpg')},
                { id: 1, name: "R6" ,image:require('~/static/img/categorys/R6挂壁.jpg')},
              ],
            },
            {
              name: "PCBA主版",
              link: "/category/1",
              children: [
                { id: 1, name: "R450",image: require('~/static/img/categorys/R450.jpg')},
                { id: 1, name: "R229" ,image:require('~/static/img/categorys/R229.jpg')},
              ],
            },
            {
              name: "智能通道闸",
              link: "/category/1",
              children: [
                { id: 1, name: "铝合金速通门",image:require('~/static/img/categorys/铝合金速通门.jpg') },
                { id: 1, name: "铝合金小摆闸" ,image:require('~/static/img/categorys/铝合金小摆闸.jpg')},
              ],
            },
            {
              name: "警务通终端",
              link: "/category/1",
              children: [{ id: 1, name: "P7",image:require('~/static/img/categorys/P7警务终端.jpg') }],
            },
            {
              name: "ETC智能终端",
              link: "/category/1",
              children: [
                { id: 1, name: "R366ETC",image:require('~/static/img/categorys/R366ETC.jpg') },
              { id: 1, name: "R800CETC",image:require('~/static/img/categorys/R800CETC.jpg') }],
            },
          ],
        },
        // { name: "用户案例", link: "/example" },
        { name: "解决方案", link: "/business" },
        {
          name: "关于我们",
          link: "/about/company",
          children: [
            { name: "公司介绍", link: "/about/company" },
            { name: "发展历程", link: "/about/course" },
            { name: "企业文化", link: "/about/culture" },
            { name: "联系我们", link: "/about/contact" },
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
      // console.log(this.isCollapse, "this.isCollapse");
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
  height: $header-height !important;
  color: $theme-color;
  font-size:14px;
  &:hover {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.5s;
    .custom-nav-item {
      a {
        display: block;
        color: #333;
      }
    }
  }
  .header-style {
    // line-height: $header-height;
    height:$header-height;
    display:flex;
    justify-content: flex-start;
    align-items:center;
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
  height: $header-height;
  ul{
    margin:0;
  }
  // overflow: hidden;

  // overflow: hidden;
  .custom-nav-m {
    display: none;
  }

  // button {
  //   display: none;
  // }
}
// .custom-button {
//   display: none;
//   text-align: right;
// }
// .custom-site-nav {
//   display: none;
// }


.custom-nav {
  // width: 100%;
  height: $header-height;
  line-height: $header-height;
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0 !important;
  // align-items: center;

  .custom-nav-item {
    margin: 0 40px;
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
      // font-weight: 600;

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
    // transition: 0.4s;
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


// 手机导航按钮
.mobnav-btn {
  display: inline-block;
  vertical-align: middle;
  width: 26px;
  height: 44px;
  position: relative;
  margin-left: 10px;
  span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: $theme-color;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-border-radius: 3px;
    border-radius: 3px;
  }
  span:first-child {
    top: 12px;
    left: 3px;
    right: 3px;
    width: auto;
  }
  span:nth-child(2) {
    top: 50%;
    margin-top: -1px;
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }
  span:last-child {
    bottom: 12px;
    left: 3px;
    right: 3px;
    width: auto;
  }
}
.open {
  span:first-child {
    top: 20px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 100%;
    left: 0;
    right: 0;
  }
  span:nth-child(2) {
    opacity: 0;
  }
  span:last-child {
    bottom: 21px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 100%;
    left: 0;
    right: 0;
  }
}

// 产品下拉框
.custom-dropdown-content {
  position: absolute;
  top: $header-height; // 为导航栏高度
  left: 0; // 设置为0, 不然会直接定位到父元素下方
  // height: 0px; // 下拉初始高度
  right: 0;
  width: 100%;
  overflow: hidden;
  background-color: $white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items:center;
  border-top: 1px solid rgba(173, 166, 166, 0.5);
  .custom-dropdown-menu {
    padding: 6px 0;
    color: #fff;
    background-color: #fff;
    // border-radius: 4px;
  
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
        width: 200px;
        height: 230px;
        margin-bottom: 50px;
        margin-right: 50px;
        // text-align: left;
        // white-space: wrap;
        color: #333;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        background: rgba(246, 242, 242, 0.5);
        text-align: center;
        padding:10px;
        
        img {
          width: 180px;
        }
        div {
          width: 100%;
          padding:10px 0;
          font-size: 16px;
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

// 导航栏激活样式
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
  font-size:16px;
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
  display: none;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: $white;
  width: 100vw;
  height: 100vh;
  transform: translateY(-100vh);
  padding-top: $header-height;
  z-index: -1;
  flex-direction: column;
  transition: 0.3s ease-in-out;
  list-style-type: none;
  overflow-y: auto;
  padding-left:10px;
  padding-right:20px;

  &.active {
    transform: translateY(0px);
  }
  
a,
a:hover,
a:active,
a:visited,
a:link,
a:focus {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 1);
  -webkit-tap-highlight-color: transparent;
  // color: #ffffff99;
  outline: none;
  background: none;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 1);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
}

.custom-button {
  display: none;
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
::v-deep .dropdown-menu-right  {
  border:none;
  li{
    border-left:3px solid $primary-color;
    margin-bottom:8px;
    margin-left:5px;
  }
}

::v-deep .dropdown-item {
  padding-top: 6px;
  padding-bottom: 6px;
}
::v-deep .nav-link,
.nav-link-custom {
  color: #333;
  border-left:3px solid $primary-color;
}



::v-deep .dropdown-toggle:after {
  float: right;
  padding-top: 4px;
  margin-top: 10px;
  color:$theme-color;
  font-size:20px;
}

::v-deep .nav-item {
  // border-left: 
  padding: 4px 6px;
}



</style>
