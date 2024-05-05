<template>
  <section class="section-wrap">
    <div class="empty-nav"></div>
    <div class="product-nav-wrap">
      <div class="container mx-auto product-nav">
        <div class="product-nav-left">R366C</div>
        <div class="product-nav-right">
          <b-button
            variant="link"
            class="text-decoration-none"
            @click="handleToImg"
            >概览</b-button
          >
          <b-button
            variant="link"
            class="text-decoration-none"
            @click="handleToTable('#parameter')"
            >产品参数
          </b-button>
        </div>
      </div>
    </div>

    <div style="border-bottom: 1px solid gray">
      <section id="overview">
        <div id="insmeter-img">
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_01.png')"
          ></b-img>
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_02.png')"
          ></b-img>
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_03.png')"
          ></b-img>
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_04.png')"
          ></b-img>
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_05.png')"
          ></b-img>
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_06.png')"
          ></b-img>
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_07.png')"
          ></b-img>
          <b-img
            fluid
            :src="require('~/static/img/R366C/366c-xiangqing_08.png')"
          ></b-img>
        </div>
      </section>

      <!-- <section id="parameter">
        <div class="insmeter-table container mx-auto" ref="tableRef">
          <table>
            <tbody>
              <tr>
                <td colspan="2" class="td-title">系统配置</td>
              </tr>
              <tr>
                <td>处理器</td>
                <td>8核2.0GHz高性能处理器</td>
              </tr>

              <tr>
                <td>操作系统</td>
                <td>Android 11.0</td>
              </tr>

              <tr>
                <td>内存（ROM+RAM）</td>
                <td>
                  5G：64GB+4GB（标配），128GB+6GB（选配）<br />4G：64GB+4GB
                </td>
              </tr>

              <tr>
                <td>SIM</td>
                <td>
                  三选二SIM卡槽，支持双卡双待<br />
                  *三选二卡槽：可同时放两张卡，nano&nbsp;SIM卡+nano&nbsp;SIM卡/nano&nbsp;SIM卡+TF卡<br />
                </td>
              </tr>

              <tr>
                <td>扩展插槽</td>
                <td>
                  5G：Micro SD卡（最高支持1TB）<br />4G：Micro
                  SD卡（最高支持256GB）
                </td>
              </tr>

              <tr>
                <td>显示屏</td>
                <td>
                  4G：6.21英寸，分辨率1520*720像素<br />5G：6.21英寸，分辨率1920*1080像素
                </td>
              </tr>

              <tr>
                <td>触控屏</td>
                <td>工业级电容屏，支持湿手操作/手势操作/多点触控/手套模式</td>
              </tr>

              <tr>
                <td>摄像头</td>
                <td>
                  4G：后置1600万摄像头+30万副摄，前置500万像素，支持自动对焦<br />5G：后置1600万摄像头+30万副摄，前置800万像素，支持自动对焦
                </td>
              </tr>

              <tr>
                <td>闪光灯</td>
                <td>800mA闪光灯</td>
              </tr>

              <tr>
                <td>键盘</td>
                <td>共5键，侧面扫描键*2，侧面电源键*1，侧面音量±键*2</td>
              </tr>

              <tr>
                <td>电池</td>
                <td>
                  锂电池3.85V供电，4600mAh，可拆卸（可选）<br />
                  锂电池3.85V供电，4200mAh，可拆卸，支持NFC，无线充电<br />
                  *执行标准：GB31241-2014<br />
                </td>
              </tr>

              <tr>
                <td>音频</td>
                <td>内置双麦克风（降噪麦克风）</td>
              </tr>

              <tr>
                <td>充电方式</td>
                <td>Type-C充电及pin口充电，支持18W快充</td>
              </tr>

              <tr>
                <td>提示</td>
                <td>大功率喇叭/振动提示/LED提示/音频提示</td>
              </tr>

              <tr>
                <td>指纹识别</td>
                <td>支持背部指纹识别</td>
              </tr>

              <tr>
                <td>震动马达</td>
                <td>内置震动马达</td>
              </tr>

              <tr>
                <td>传感器</td>
                <td>
                  重力传感器（G-sensor）/接近传感器/光线传感器/地磁传感器/陀螺仪
                </td>
              </tr>

              <tr>
                <td>对讲功能（可选）</td>
                <td>支持一键PTT呼叫</td>
              </tr>

              <tr>
                <td>瞳孔灯（可选）</td>
                <td>支持瞳孔灯功能（5G）</td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">结构参数</td>
              </tr>
              <tr>
                <td>尺寸（H*W*D）</td>
                <td>168mm*79mm*13.7mm</td>
              </tr>

              <tr>
                <td>重量</td>
                <td>245g（含电池）</td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">通讯传输</td>
              </tr>
              <tr>
                <td>无线广域网络（网络频率）</td>
                <td>
                  国内&amp;欧亚版:<br />
                  2G：B2/B3/B5/B8 <br />
                  3G：WCDMA：B1/B5/B8 ，CDMA BC0，TD-SCDMA：B34/B39 <br />
                  4G：FDD-LTE：B1/B3/B5/B7/B8/B20，TDD-LTE：B34/B38/B39/B40/B41
                  <br />
                  5G：N1/N3/N38/N41/N77/N78/N79（仅5G版本支持）<br />
                  美洲版：<br />
                  2G：B2/B3/B5<br />
                  3G：B1/B2/B4/B5， CDMA BC0/BC1（美国）<br />
                  4G：B1/B2/B3/B4/B5/B7/B12/B17/B28A/B28B/B41<br />
                  5G：N1/N3/N38/N41/N77/N78/N79（仅5G版本支持）<br />
                </td>
              </tr>

              <tr>
                <td>无线广域网络（数据业务）</td>
                <td>
                  5G：GSM/GPRS/EDGE/CDMA/UMTS/HSPA/HSPA+/EVDO/WCDMA/TD-SCDMA/TDD-LTE/FDD-LTE/SA/NSA/Sub6<br />4G：GSM/GPRS/EDGE/CDMA/UMTS/HSPA/HSPA+/EVDO/WCDMA/TD-SCDMA/TDD-LTE/FDD-LTE
                </td>
              </tr>

              <tr>
                <td>WLAN功能</td>
                <td>
                  Wi-Fi
                  802.11a/b/g/n/ac/d/e/h/i/j/k/r/v/w（2.4G+5G双频Wi-Fi），支持快速漫游
                </td>
              </tr>

              <tr>
                <td>蓝牙</td>
                <td>5G：Bluetooth 5.1<br />4G：Bluetooth 5.0</td>
              </tr>

              <tr>
                <td>GPS</td>
                <td>GPS/AGPS/北斗/伽利略/GLONASS/QZSS/GNSS</td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">环境参数</td>
              </tr>
              <tr>
                <td>工作温度</td>
                <td>-20℃~60℃ <br />*为安全考虑，请勿在低温环境下充电</td>
              </tr>

              <tr>
                <td>存储温度</td>
                <td>-40℃~70℃（不含电池）</td>
              </tr>

              <tr>
                <td>湿度</td>
                <td>0～95% （无结露）</td>
              </tr>

              <tr>
                <td>跌落规格</td>
                <td>1.5米水泥地多次跌落</td>
              </tr>

              <tr>
                <td>滚筒跌落规格</td>
                <td>1000次0.5米高处滚筒跌落</td>
              </tr>

              <tr>
                <td>防护等级</td>
                <td>IP67</td>
              </tr>

              <tr>
                <td>静电放电</td>
                <td>±15KV（空气放电），±8KV（接触放电）</td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">扫描引擎</td>
              </tr>
              <tr>
                <td>条码支持</td>
                <td>支持一维/二维条码扫描</td>
              </tr>

              <tr>
                <td>扫描精度</td>
                <td>≥3.33mil</td>
              </tr>

              <tr>
                <td>扫描角度</td>
                <td>
                  水平33.5°，偏移视角公差±65.5°，倾斜视角公差±68°，旋转视角公差±360°
                </td>
              </tr>

              <tr>
                <td>运动容差</td>
                <td>8m/s</td>
              </tr>

              <tr>
                <td>扫描距离</td>
                <td>
                  Code128（3.3mil）：10.0cm ~15.0cm
                  <br />Code128（15mil）：5.5cm ~ 71.0cm <br />QR
                  Code（7.5mil）：11.0cm ~ 17.5cm <br />QR
                  Code（100mil）：12.0cm ~ 235cm
                  <br />PDF417（7.5mil）：7.0cm~33.5cm <br />Data
                  Matrix（10.8mil）：6.0cm~31.0cm
                </td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">通讯接口</td>
              </tr>
              <tr>
                <td>USB接口</td>
                <td>
                  5G：Type-C（带耳机功能）*1，USB 3.0<br />4G：Type-C（带耳机功能）*1
                </td>
              </tr>

              <tr>
                <td>OTG接口</td>
                <td>支持</td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">开发支持</td>
              </tr>
              <tr>
                <td>开发语言</td>
                <td>Java</td>
              </tr>

              <tr>
                <td>开发API</td>
                <td>
                  iScan&nbsp;API（扫描开发包），Device&nbsp;API（设备管理/配置开发包），Android标准接口
                </td>
              </tr>

              <tr>
                <td>开发工具</td>
                <td>Eclipse/Android&nbsp;Studio</td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">设备配件</td>
              </tr>
              <tr>
                <td>标准配件</td>
                <td>USB数据线*1，电源适配器*1，手绳*1，背带*1，电池*1</td>
              </tr>

              <tr>
                <td>可选配件</td>
                <td>
                  充电卡夹，单座充，主机四联充，电池四联充，腰包，保护膜，保护套
                </td>
              </tr>

              <tr>
                <td colspan="2" class="td-title">温馨提示</td>
              </tr>
              <tr>
                <td>提示1</td>
                <td>因产品线不定期更新，内容如有变更，恕不另行通知。</td>
              </tr>

              <tr>
                <td>提示2</td>
                <td>
                  本产品包含4G/5G两个版本，详细产品参数可下载产品彩页了解。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section> -->
    </div>
  </section>
</template>

<script>
import smoothscroll from "smoothscroll-polyfill";

if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  layout: "ProductLayout",
  data() {
    return {
      tableTop: "",
    };
  },

  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({ mobile: false }).init();
    }

    setTimeout(() => {
      this.tableTop = this.$refs.tableRef.offsetTop - 64;
    }, 1000);
  },
  methods: {
    handleToImg() {
      window.scrollTo({
        top: 64,
        left: 0,
        behavior: "smooth",
      });
    },
    handleToTable(selector) {
      if (!this.tableTop) {
        setTimeout(() => {
          // 获取锚点元素
          let anchor = this.$el.querySelector(selector);
          anchor.scrollIntoView();
        }, 500);
      } else {
        window.scrollTo({
          top: this.tableTop,
          left: 0,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section-wrap {
  position: static;
}
.empty-nav {
  background: #001220;
  height: $header-height;
}
.product-nav-wrap {
  width: 100%;
  background-color: snow;
  position: sticky;
  // z-index: 1004;
  top: 0;
  .product-nav {
    // width: 100%;
    background-color: snow;
    height: $header-height;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-left {
      line-height: $header-height;
      font-size: 20px;
      font-weight: 500;
    }
    &-right {
      line-height: $header-height;
    }
  }
}
.header-content {
  background: url("~/static/img/banner/inside-banner3.jpeg") center center
    no-repeat;
  background-size: cover;
  // background-attachment: fixed;
}
.header-white {
  position: sticky;
  top: 0;
  height: $header-height;
  background-color: $mask-color;
}
.header-top {
  position: sticky;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(173, 166, 166, 0.5);
  top: $header-height;
  background-color: $white;
  z-index: 10;
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: #2a333c;
}
.detail {
  font-size: 16px;
  line-height: 2;
  color: #2a333c;
}
.breadcrumb a {
  color: $theme-color;
}

#parameter {
  background: #131313;
}

.insmeter-table {
  color: #fff;
  background: #131313;
  padding: 20px 0px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: initial;
  border-color: gray;
  width: 100%;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
table tr:nth-child(odd) {
  background-color: rgba(245, 245, 245, 0.15);
}
table tr td {
  word-break: break-all;
  word-wrap: break-word;
  font-size: 12px;
  padding: 15px;
}
.td-title {
  background-color: transparent;
  padding: 15px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
}
</style>
