<template lang="html">
  <div>
    <div class="listCon" v-if="routeNum != 3">
      <div class="row listHeader">
          <p class="col-xs-12 col-md-6">{{ name }}</p>
          <crumbs-con class="col-xs-12 col-md-6 text-right"></crumbs-con>
      </div>
      <text-list :data='data' :toName='toName' :interfaces='interfaces'></text-list>
    </div>
    <!-- 详情页 -->
    <router-view></router-view>
</div>
</template>

<script>
import crumbsCon from '@/components/crumbs'
import textList from '@/components/textList'
import axios from 'axios'

export default{
  data() {
    return {
      name: '行业动态',
      data: '',
      routeNum: '',
      toName: 'industry_dynamics',
      interfaces: '/unified/content'
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;//  根据路由判断当前所处位置，控制详情页
    this.fetchData();
  },
  methods: {
    fetchData() {
      setTimeout(()=>{
        let ids = this.mId;
        let pageSize = this.$route.query.pageSize == undefined ? 1 : this.$route.query.pageSize;
        axios.get('/newsModul/news').then(
          res => {
            if(res.data.code == 0){
              this.data = res.data.data;
            }
          }
        )
      }, 5)
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  props: {
    mId: {
      type: String,
      default: '',
      required: true
    }
  },
  components: {
    crumbsCon,
    textList
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
