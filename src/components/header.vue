<template lang="html">
  <div>
      <div class="row logoBox margin-bottom-10">
        <div class="col-sm-12 col-md-6 logo"></div>
        <div class="col-sm-12 col-md-6">
            <div class="input-group inputBox">
                <a class="icon-search"><i class="glyphicon glyphicon-search"></i></a>
                <input type="text" :value="keyword" class="input-search form-control" placeholder="搜索您需要的内容..." aria-describedby="basic-addon2" @change="getVal($event)">
                <span class="input-group-addon" id="basic-addon2" @click="goSearch">
                  <router-link :to="{path:keyword==''?'':'/search', query:keyword==''?'':{keyword:keyword,pageNum:'1',page:'3',startTime:'',endTime:''}}" activeClass="active" exact>
                    搜 索
                  </router-link>
                </span>
            </div>
        </div>
      </div>
      <header-nav></header-nav>
  </div>
</template>

<script>
import HeaderNav from './nav.vue'

export default {
  data(){
    return {
      keyword: ''
    }
  },
  components: {
    HeaderNav
  },
  created() {
    if(this.$route.query.keyword){
      this.keyword = this.$route.query.keyword;
    }
  },
  methods:{
    getVal(e){
      this.keyword = $.trim(e.target.value);
    },
    goSearch(){
      if(this.keyword == ""){
        alert("请输入关键字！")
        return;
      }else{
        this.keyword = this.keyword;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .logoBox {
    margin-top: 12px;
    .logo{
      width: 420px;
      height: 108px;
      margin-right: 165px;
      background: url(../assets/imgs/sysName.png);
    }
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
