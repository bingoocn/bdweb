<template lang="html">
  <div>
    <div class="listCon" v-if="routeNum != 3">
      <div class="row listHeader">
          <p class="col-xs-12 col-md-6">{{ name }}</p>
          <crumbs-con class="col-xs-12 col-md-6 text-right"></crumbs-con>
      </div>
      <mes-con :mId='mId' :data = 'data'></mes-con>
    </div>
</div>
</template>

<script>
import crumbsCon from '@/components/crumbs'
import mesCon from '@/components/mesCon'
import axios from 'axios'

export default{
  data() {
    return {
      name: '兵器介绍',
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
    crumbsCon,
    mesCon
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
.listHeader {
  p {
      display: inline-block;
      font-size: 24px;
      color: #333333;
      font-weight: bold;
  }
}
</style>
