<template lang="html">
  <div>
        <div class="row logoBox margin-bottom-10">
          <div class="col-sm-12 col-md-6">
              <img class="img-responsive" src="@/assets/imgs/sysName.png">
          </div>
          <div class="col-sm-12 col-md-6">
              <div class="input-group inputBox">
                  <a class="icon-search"><i class="glyphicon glyphicon-search"></i></a>
                  <input type="text" class="input-search form-control" placeholder="搜索您需要的内容..." aria-describedby="basic-addon2">
                  <span class="input-group-addon" id="basic-addon2"><a href="#">搜 索</a></span>
              </div>
          </div>
        </div>
        <header-nav></header-nav>
    </div>

</template>

<script>
import HeaderNav from './nav.vue'

export default {
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss" scoped>
  .logoBox {
    margin-top: 48px;
  }
  .margin-bottom-10 {
    margin-bottom: 10px;
  }
  .inputBox {
    position: relative;
    padding-top: 35px;
    .icon-search {
      display: inline-block;
      width: 40px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      font-size: 18px;
      color: #9EAEB7;
      position: absolute;
      left: 0;
      top: 35px;
      z-index: 10;
      .glyphicon {
        padding-top: 7px;
      }
    }
    .input-search {
      height: 33px;
      line-height: 33px;
      background-color: #4e76a8;
      font-size: 14px;
      color: #b2b2b2;
      outline: none;
      border: 0;
      padding-left: 40px;
    }
    .input-group-addon {
      background-color: #0d5183;
      border: 0;
      border-radius: 0;
      a {
        font-size: 16px;
        color: #fff;
      }
    }
  }
</style>
