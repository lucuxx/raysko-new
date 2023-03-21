<template>
  <header
    ref="header"
    class="header"
    :class="{ 'active-header': showNavbarBg }"
  >
    <div>
      <b-img
        height="50"
        :src="require('~/assets/img/logo2.png')"
        alt=""
      />
    </div>

    <!-- 导航 -->
    <nav class="nav-bar">
      <ul class="nav">
        <li v-for="(nav, index) in navList" :key="index">
          <div class="nav-item" :class="{ 'active-background': showNavbarBg }">
            <div class="nav-item-title"  @click="handleNavbarClick(nav, '', $event)">
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
                    @click="handleNavbarClick(navChildren, '', $event)"
                  >
                    <nuxt-link :to="navChildren.link"  tag="li">{{
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
        {
          name: "产品中心",
          link: "/product",
          children: [
            { name: "银行解决方案", link: "/solution/bank" },
            { name: "证券解决方案", link: "/solution/bank" },
            { name: "高铁解决方案", link: "/solution/bank" },
          ],
        },
        // { name: "用户案例", link: "/example" },
        { name: "解决方案", link: "/business" },
        { name: "关于我们", link: "/about" },
      ],
      routePath: "",
      isCollapse: true,
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
    handleNavbarClick(item, index, bvEvt) {
      // if (index !== "") {
      //   this.$store.commit("setSubNavIndex", index + 1);
      // } else {
      //   this.$store.commit("setSubNavIndex", 0);
      //   this.showDrop = false;
      // }
      // this.$router.push(item.link);
      console.log(item,index,bvEvt)
      this.showNavbarBg = false
      this.showCollaps = false;
    },
    // 监听窗口滚动，改变导航背景色
    handleWindowScroll(e) {
      const myTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const flag = myTop > 60;
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
  color: $white;
  &:hover {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    color: $theme-color;
    transition: all .6s;
    .nav-item {
      a {
        display: block;
        color: $black;
      }
    }
  }
}
.header-white {
  height: $header-height;
}

.active-header {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: $theme-color;
  transition: all .6s;
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
      margin-bottom:4px;
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

    &:hover .custom-dropdown-content {
      // height: 150px !important;
      display: block;
      transition: 0.6s;
    }

    .custom2-dropdown-content {
			position: absolute;
			top: $header-height; // 为导航栏高度
			left: 0; // 设置为0, 不然会直接定位到父元素下方
			// width: 300px;
			height: 0; // 下拉初始高度
			overflow: hidden;
			transition: 0.6s;

			.custom2-dropdown-menu {
				padding: 10px 8px 15px;
				color: #fff;
				background-color: #fff;
				border-radius: 4px;

				.custom2-menuItem {
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

  // 下拉菜单
  .custom-dropdown-content {
    position: fixed;
    display: none;
    top: $header-height; // 为导航栏高度
    left: 0; // 设置为0, 不然会直接定位到父元素下方
    // height: 0px; // 下拉初始高度
    right: 0;
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

.nav .active-background {
  // .nav .nav-item .nav-item-title .active
  a {
    color: $black;
  }

}

</style>
