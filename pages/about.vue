<template>
  <section>
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

    <div
      v-if="showNavFixed"
      class="bar navFixed"
      :style="{ top: headerHeight - 2 + 'px' }"
      ref="nav2"
    >
      <div
        class="bar-item py-2 px-3"
        v-for="(item, index) of list"
        :key="index"
        :class="{ active: active === index }"
        @click="handleNavClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="bar" ref="nav">
      <div
        class="bar-item py-2 px-3"
        v-for="(item, index) of list"
        :key="index"
        :class="{ active: active === index }"
        @click="handleNavClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="container py-5">
      <article v-for="(item, index) of list" :Key="index">
        <h5 ref="title" class="title mb-3">{{ item.title }}</h5>
        <p class="desc text-dark mb-5" v-html="item.desc"></p>
        <template v-if="!item.desc">
          <b-row>
            <b-col lg="6" class="mb-3 d-none d-sm-block">
              <div style="height:300px;">

              <iframe
                width="100%"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://lbs.amap.com/tools/showmap?1_560_440_113.87345_22.564725&=%E6%B7%B1%E5%9C%B3%E7%9D%BF%E6%80%9D%E7%A7%91%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&=%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%AE%9D%E5%AE%89%E5%8C%BA%E5%85%B4%E4%B8%9A%E8%B7%AF2005%E5%8F%B7%E5%B9%BF%E5%85%B4%E6%BA%90%E4%BA%92%E8%81%94%E7%BD%91%E5%88%9B%E6%84%8F%E5%9B%ADC%E6%A0%8B509&=&=&="
              ></iframe>
            </div>

            </b-col>
            <b-col lg="6" class="desc">
              <p>地址： 深圳市宝安区兴业路2005号广兴源互联网创意园C栋509</p>
              <p>电话： 熊先生 13798209586</p>
              <p>邮箱： xiongpeng0809@raysko.cn</p>
              <p>公司网站： www.raysko.com</p>
            </b-col>
          </b-row>
        </template>
      </article>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import smoothscroll from "smoothscroll-polyfill";

if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
  // smoothscroll.polyfill();
}

export default {
  data() {
    return {
      topList: [],
      navHeight: 0,
      navTop: 0,
      showNavFixed: false,
      active: 0,
      list: [
        {
          title: "公司介绍",
          desc: `深圳睿思科信息技术有限公司是国家级高新技术企业和双软企业，是手持终端机厂家_手持终端品牌制造商。专注于研究移动智能数据终端，移动智能支付终端，金融POS，手持数据采集器，移动警务通，手持工业终端,访客机，RFID手持机，RFID超高频终端，工业PDA，刷脸支付设备，物流扫描巴枪，移动手持终端，身份证核验终端，手持机厂家等领域的移动应用设备的研发，生产，销售和服务以及整体解决方案。它是中国移动行业应用和发展的先驱和市场领袍者。我们有十五年的行为背景和发展经验。
          在成立之日，睿思科率先在中国推出了自己的移动智能数据终端系列产品。公司十份重视产品和技术的研发投入，不断追求技术创新。现有研究人员占50％以上，其中95％为本科生，研究生和博士。公司拥有多项专利和软件著作权，产品线齐全，不断更新，业绩持续高速增长，在业界移动应用领域享有盛誉。研究成果已成功应用于国佳电网，支付宝移动支付和交警检查等大型项目。同时，它为物流和快递，零售连锁，医疗卫生，金融POS，电力，政附和公用事业等行业提供合适的移动应用软件和硬件集成解决方案。`,
        },
        {
          title: "企业文化",
          desc: `愿景：造客户最满意的手持终端 <br/>
          使命：创行业一流，做全国第一 <br />
          核心价值观：创新，协作，睿智，思考`,
        },
        // {
        //   title: '荣誉资质',
        //   desc: `信用等级AAA认证<br/>
        //   ISO9001质量管理体系认证<br/>
        //   ISO27001信息安全管理体系认证<br/>
        //   双软企业认证<br/>
        //   高新企业`
        // },
        // {
        //   title: '公司新闻',
        //   desc: `公司最新的动态，重大事件`
        // },
        {
          title: "联系我们",
        },
      ],
    };
  },
  watch: {
    subNavIndex(newVal, oldVal) {
      this.active = newVal - 1;
      setTimeout(() => {
        this.handleNavClick(this.active);
      }, 0);
    },
    // active(newVal, oldVal) {
    //   setTimeout(() => {
    //     this.handleNavClick(newVal)
    //   }, 0)
    // }
  },
  computed: {
    ...mapState(["headerHeight", "subNavIndex"]),
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init();
    }

    this.getTitleHeight();

    console.log(this.navTop,"console")

    this.active = this.subNavIndex == 0 ? 0 : this.subNavIndex - 1;
    if (this.active != 0) {
      setTimeout(() => {
        this.handleNavClick(this.active);
      }, 0);
    }

    window.addEventListener("scroll", this.handleWindowScroll);
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleWindowScroll);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    // 点击切换tab
    handleNavClick(index) {
      // this.active = index
      console.log(this.topList[index],this.headerHeight,this.navHeight)
      window.scrollTo({
        top: this.topList[index] - this.headerHeight - this.navHeight,
        left: 0,
        behavior: "smooth",
      });
      console.log(this.topList[index] - this.headerHeight - this.navHeight);
    },
    // 监听窗口滚动
    handleWindowScroll(e) {
      const myTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 固定tab
      const flag = myTop > this.navTop - this.headerHeight;

      console.log(myTop, this.navTop, this.headerHeight);
      console.log(flag, "flag");
      if (this.showNavFixed != flag) {
        this.showNavFixed = flag;
      }

      // 高亮tab-item
      const list = [...this.topList, 9999];
      const doubleBarHeight = this.navHeight + this.headerHeight;
      for (let i = 0, len = list.length; i < len; i++) {
        if (
          myTop >= list[i] - doubleBarHeight &&
          myTop < list[i + 1] - doubleBarHeight
        ) {
          this.active = i;
        }
      }
    },
    // 获取每个title、nav的高度
    getTitleHeight() {
      const titleList = this.$refs.title;
      this.topList = titleList.map((val) => {
        return val.offsetTop;
      });
      const navHeight = this.$refs.nav.clientHeight;
      this.navHeight = navHeight;
      const navTop = this.$refs.nav.offsetTop;
      this.navTop = navTop;
    },
    // 改变窗口大小重新获取title、nav高度
    handleWindowResize() {
      this.$nextTick(() => {
        this.getTitleHeight();
      });
      this.handleNavClick(this.active);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background: url("~/static/img/banner/inside-banner1.jpeg") center center
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.spin-content {
  height: 200px;
  .flex {
    display: flex;
    height: 100%;
    width: 100%;
    > div {
      margin: auto;
    }
    h1 {
      font-size: 24px;
      color: #ffffff;
      text-align: center;
    }
    p {
      font-size: 14px;
      color: #ffffff;
    }
  }
}

@media screen and (min-width: 768px) {
  // content-1居中大行
  .spin-content {
    height: 456px;
    .flex {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
.navFixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
  background: #fff;
}
.bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 1px solid #dee2e6;
  font-size: 16px;
  color: #333;
  .bar-item {
    cursor: pointer;
    &.active {
      color: #007bff;
    }
  }
}
::v-deep.nav-tabs .nav-item .nav-link {
  border-color: transparent !important;
  font-size: 16px;
  color: #333;
  &.active {
    color: #007bff;
  }
  &:hover {
    color: #007bff;
  }
}
.desc {
  // line-height: 3;
  font-size: 16px;
  color: #0a1633;
  line-height: 30px;
  text-align: left;
}
</style>
