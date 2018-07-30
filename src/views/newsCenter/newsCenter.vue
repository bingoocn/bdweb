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
import { getListNews } from '@/axios/api'

export default{
  data() {
    return {
      name: '新闻中心',
      data: '',
      routeNum: '',
      toName: 'news'
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;// 根据路由判断当前所处位置，控制详情页
    if(this.$route.matched.length > 2) return; // 判断是否处于内容页
    this.fetchData();// 获取数据
  },
  methods: {
    fetchData() {
      setTimeout(()=>{
        const ids = this.mId;
        let pageNumber = this.$route.query.pageSize == undefined ? 1 : this.$route.query.pageSize;

        getListNews(ids, pageNumber, 5).then(res => {
          this.data = res.data;
        })
      }, 5)
    }
  },
  watch: {
    '$route': 'fetchData' // 监听路由变化，随时获取新的列表信息
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
