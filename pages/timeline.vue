<template>
  <section>
    <div class="header-content spin-content">
      <div style="height: 100%">
        <div class="flex">
          <div class="content">
            <h1 class="wow slideInLeft">发展历程</h1>
            <p class="wow slideInRight">不忘初心，砥砺奋进</p>
          </div>
        </div>
      </div>
    </div>

    <TimeLine />

  </section>
</template>

<script>
import TimeLine from "@/components/About/timeline.vue"
export default {
  components:{TimeLine}
}
</script>

<style lang="scss" scoped>

.header-content {
  background: url("~/static/img/banner/inside-banner2.jpeg") center center
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
</style>
