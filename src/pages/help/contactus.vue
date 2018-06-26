<template lang="html">
  <div>
    <div class="listCon" v-if="routeNum != 3">
      <div class="row listHeader">
          <p class="col-xs-12 col-md-6">{{ name }}</p>
          <crumbs-con class="col-xs-12 col-md-6 text-right"></crumbs-con>
      </div>
      <div class="introTitle">{{ name }}</div>
      <div class="listBody2">
        <p class="pText1">如对网站有任何意见建议，请联系：<br>邮箱：<br>微信公众平台：<br>微博：</p>
      </div>
    </div>
</div>
</template>

<script>
import crumbsCon from '@/components/crumbs'
import axios from 'axios'

export default{
  data() {
    return {
      name: '联系我们',
      routeNum: '',
      data: '',
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;// 根据路由判断当前所处位置，控制详情页
  },
  mounted() {
    setTimeout(()=>{
      const ids = this.mId;
      axios.get('/system/content/'+ids+'').then(
        res => {
          if(res.data.code == 0){
            this.data = res.data.data;
          }
        }
      )
    },5)
  },
  components: {
    crumbsCon
  },
  props: {
    mId: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.introTitle {
  padding: 16px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #005db5;
  font-weight: bold;
  margin-bottom: 10px;
}
.listBody2 {
  background-color: #f5f5f5;
  padding: 5px 15px 15px;
  .ptitle, .ptext {
    text-indent: 2em;
    font-size: 16px;
    color: #333;
  }
  .ptext {
    line-height: 150%;
    margin-bottom: 23px;
  }
  .pText1 {
    line-height: 300%;
    margin-bottom: 23px;
  }
}
.listHeader {
  p {
      display: inline-block;
      font-size: 24px;
      color: #333333;
      font-weight: bold;
  }
}
</style>
