<template>
  <div id="GoTop">
    <div class="msg d-none d-sm-block" id="button-1" variant="outline-success">
      <font-awesome-icon size="lg" :icon="['fas', 'qrcode']" />
    </div>

    <b-tooltip target="button-1" placement="left">
      <div>
        <b-img
          :src="require('~/static/img/footer/lianxi.jpeg')"
          height="100"
        ></b-img>
      </div>
      <strong class="font-strong">关注我们</strong>
    </b-tooltip>
    <div class="mobel d-none d-sm-block" id="button-2" variant="outline-success">
      <font-awesome-icon size="lg" :icon="['fas', 'phone']" />
    </div>

    <b-tooltip target="button-2" placement="left">
      <strong class="font-strong">
        联系我们 13798209586
      </strong>
    </b-tooltip>
    <div class="Rtop" @click="GoTop()" v-show="flag">
      <font-awesome-icon size="lg" :icon="['fas', 'angle-double-up']" />
    </div>
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false,
    };
  },
  mounted() {
    // 回到顶部
    let that = this;
    this.$nextTick(() => {
      // this.initScroll()
      window.onscroll = function () {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 800) {
          //写后台加载数据的函数 一定要用that
          that.flag = true;
        } else {
          that.flag = false;
        }
      };
    });
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    },
  },
};
</script>
<style scoped lang="scss">
#GoTop {
  position: fixed;
  top: 40%;
  right: 0;
  // padding-top: 18px;
  // width: 4pc;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
  font-weight: 700;
  font-size: 1pc;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .msg {
    line-height: 50px;
    width: 40px;
    color: #fff;
    text-align: center;

    :hover {
      color: $theme-color;
    }
  }
  .mobel {
    line-height: 50px;
    width: 40px;
    color: #fff;
    text-align: center;

    :hover {
      color: $theme-color;
    }
  }
  .Rtop {
    line-height: 50px;
    width: 40px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    :hover {
      color: $theme-color;
    }
  }
}

.font-strong{
  font-size:16px;
  font-weight: 600;
}
/* #GoTop > span {
  display: block;
  width: 100%;
  height: 100%;
} */
</style>
