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
import crumbsCon from '@/components/crumbs'
import textList from '@/components/textList'

const data = [{
  title: '第九届中国卫星导航学术年会在哈尔滨召开',
  evaluateDate: '2018-04-27',
  fguid: '111'
},{
  title: '人民日报：自主创新确保北斗系统稳定运行',
  evaluateDate: '2018-04-26',
  fguid: '112'
},{
  title: '关于开展2018年度北斗专项标准项目申报的通知',
  evaluateDate: '2018-04-25',
  fguid: '113'
}];

export default{
  data() {
    return {
      name: '官方下载',
      data: data,
      routeNum: '',
      toName: 'officialDownload'//详情页路由name值
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;//  根据路由判断当前所处位置，控制详情页
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
