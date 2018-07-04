<template lang="html">
  <div v-if='routeShow'>
    <div class="fixedHeader">
        <div class="container">
            <span class="nowTime">{{ dates }}&nbsp;&nbsp;{{ week }}</span>
            <span class="registerAndLogin">欢迎您，{{ user }}</span>
        </div>
    </div>
    <div class="indexBg"><img src="@/assets/imgs/bigDipper_indexBanner_171123_01.jpg"></div>

    <div class="container">
      <home-header></home-header>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/header'
import CommonFooter from '@/components/footer'

export default {
  components: {
    HomeHeader,
    CommonFooter,
  },
  provide() {//在全局提供reload依赖，根据情境刷新页面
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      routeShow: true,//根据该值控制刷新
      dates: '',
      week: '',
      user: '游客xxx'
    }
  },
  methods: {
    reload() {//定义reload方法
      this.routeShow = false
      this.$nextTick(function(){
        this.routeShow = true
      })
    }
  },
  mounted() {
    const dates = new Date();
    const year = dates.getFullYear();
    const month = dates.getMonth() + 1;
    const date = dates.getDate();
    const week = dates.getDay();
    const weeks = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][week];

    this.dates = year+'年'+month+'月'+date+'日';
    this.week = weeks;
  }
}
</script>

<style lang="scss" scoped>
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .fixedHeader {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background: url(./assets/imgs/bigDipper_indexHeaderBg_171123_03.png);
    z-index: 1;
    .nowTime {
        color: #8cb5e3;
        font-size: 14px;
    }
    .registerAndLogin {
        float: right;
        color: #8cb5e3;
        font-size: 14px;
    }
  }
  .indexBg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      img {
          width: 100%;
      }
  }
}
</style>
