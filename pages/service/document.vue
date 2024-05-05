<template>
  <section>
    <SectionHeading :heading="title" content="" />
    <article>
      <h3>规格书&产品素材</h3>
      <div class="container py-5 wrapper">

          <b-row class="mx-0">
            <b-col
              lg="3"
              md="6"
              sm="12"
              v-for="(item, ind) of products"
              :key="ind"
              class="wow fadeInUp"
              >
              <!-- :data-wow-delay="0.2 * ind + 's'" -->
              <b-card img-top class="mb-4">
                <b-card-img
                  class="mx-auto "
                  :src="item.image"
                ></b-card-img>
                <b-card-title class="mx-auto title-center">{{
                  item.name
                }}</b-card-title>

                  <!-- @click="$router.push('/product/' + item.id)" -->
              </b-card>
            </b-col>
          </b-row>
    </div>
    </article>
  </section>
</template>

<script>
import SectionHeading from "~/components/SectionHeading";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}
export default {
  components: {
    SectionHeading,
  },
  data() {
    return {
      title: "产品文档下载",
    tabList: [
            {
              id: 1,
              name: "手持终端",
              link: "/category/1",
              children: [
                { id: 1, name: "R366",image:require('~/static/img/products/R366.jpg')},
                { id: 1, name: "R366A（大电池厚款）",image:require('~/static/img/products/R366A.jpg') },
                { id: 1, name: "R350C",image:require('~/static/img/products/R350.jpg') },
                { id: 1, name: "R606" ,image:require('~/static/img/categorys/go.png') },
                { id: 1, name: "R530C" ,image:require('~/static/img/products/R530C.jpg')},
              ],
            },
            {
              id: 2,
              name: "打印手持终端",
              link: "/category/1",
              children: [{ id: 1, name: "R800C",image:require('~/static/img/products/R800C.jpg') }],
            },
            {
              id: 3,
              name: "UHF RFID手持终端",
              link: "/category/1",
              children: [{ id: 1, name: "R366C（UHF）",image:require('~/static/img/products/R366C.jpg') }],
            },
            {
              id: 4,
              name: "双屏/单屏人脸访客终端",
              link: "/category/1",
              children: [
                { id: 1, name: "R900P" ,image:require('~/static/img/products/R900P.jpg')},
                { id: 1, name: "R8" ,image:require('~/static/img/products/R8.jpg')},
                { id: 1, name: "R7" ,image:require('~/static/img/products/R7.jpg')},
                { id: 1, name: "R6" ,image:require('~/static/img/products/R6挂壁.jpg')},
              ],
            },
            {
              id: 5,
              name: "PCBA主版",
              link: "/category/1",
              children: [
                { id: 1, name: "R450",image: require('~/static/img/products/R450.jpg')},
                { id: 1, name: "R229" ,image:require('~/static/img/products/R229.jpg')},
              ],
            },
            {
              id: 6,
              name: "智能通道闸",
              link: "/category/1",
              children: [
                { id: 1, name: "铝合金速通门",image:require('~/static/img/products/铝合金速通门.jpg') },
                { id: 1, name: "铝合金小摆闸" ,image:require('~/static/img/products/铝合金小摆闸.jpg')},
              ],
            },
            {
              id: 7,
              name: "警务通终端",
              link: "/category/1",
              children: [{ id: 1, name: "P7",image:require('~/static/img/products/P7警务终端.jpg') }],
            },
            {
              id: 8,
              name: "ETC智能终端",
              link: "/category/1",
              children: [
                { id: 1, name: "R366ETC",image:require('~/static/img/products/R366ETC.jpg') },
              { id: 1, name: "R800CETC",image:require('~/static/img/products/R800CETC.jpg') }],
            },
      ],
      products:[]
  };
  },
  mounted() {
    // if (process.browser) {
    //   // 在页面mounted生命周期里面 根据环境实例化WOW
    //   new WOW({mobile: false}).init();
    // }
    this.getList()
  },
  methods: {
    getList() {
      this.products = []
      this.tabList.forEach(i =>{
        this.products = this.products.concat(i.children)
      })
      this.$nextTick(() => {
        if (process.browser) {
          new WOW({mobile: false}).init();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>


.card {
  border: none;
  background:#f3f3f3;
  // transition: all .4s;
  cursor: pointer;
}
.card ::v-deep .card-body {
    padding: 4px !important;
}

// .card:hover {
//   // background: #F1F1F1;
//   transform: scale(1.1,1.1);

//   box-shadow: 0 0 10px #ccc;
//   color:$theme-color;

// }
.card-body-text {
  max-height: 102px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.title-center{
  text-align: center;
}


</style>
