<template lang="html">
  <div>
    <div class="listCon" v-if="routeNum != 3">
      <div class="row listHeader">
          <p class="col-xs-12 col-md-6">{{ name }}</p>
          <crumbs-con class="col-xs-12 col-md-6 text-right"></crumbs-con>
      </div>
      <text-list :data='data' :toName='toName'></text-list>
    </div>
    <!-- 详情页 -->
    <router-view></router-view>
</div>
</template>

<script>
import { getListDown } from '@/axios/api'

// 数据问题，该页面标题字段y原来为name，为统一字段后改为title

export default{
  data() {
    return {
      name: '官方下载',
      data: '',
      routeNum: '',
      toName: 'officialDownload',
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;//  根据路由判断当前所处位置，控制详情页
    if(this.$route.matched.length > 2) return; // 判断是否处于内容页
    this.fetchData();
  },
  methods: {
    fetchData() {
      setTimeout(()=>{
        const ids = this.mId;
        let pageNumber = this.$route.query.pageSize == undefined ? 1 : this.$route.query.pageSize;

        getListDown(pageNumber, 5).then(res => {
          this.data = res.data;
        })
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
