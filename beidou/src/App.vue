<template lang="html">
  <div>
    <div class="fixedHeader">
        <div class="container">
            <span class="nowTime">2018年05月03日&nbsp;&nbsp;星期四</span>
            <span class="registerAndLogin">欢迎您，xxx</span>
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
  }
}
</script>

<style lang="css" src="@/assets/css/common.css"></style>
<style lang="scss" scoped>
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .fixedHeader {
    // position: fixed;
    // top: 0;
    // right: 0;
    // left: 0;
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
