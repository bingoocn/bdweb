<template lang="html">
  <div>
    <div class="listCon" v-if="routeNum != 3">
      <div class="row listHeader">
          <p class="col-xs-12 col-md-6">{{ name }}</p>
          <crumbs-con class="col-xs-12 col-md-6 text-right"></crumbs-con>
      </div>
      <div class="listBody4">
            <ul class="listUlLink">
                <li v-for = "(item, i) in data">
                  <a :href="item.url" target="_blank">{{ item.title }}</a>
                </li>
            </ul>
            <page-list></page-list>
        </div>
    </div>
</div>
</template>

<script>
import crumbsCon from '@/components/crumbs'
import pageList from '@/components/pageList'
import axios from 'axios'

export default{
  data() {
    return {
      name: '友情链接',
      data: '',
      routeNum: ''
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;//  根据路由判断当前所处位置，控制详情页
  },
  mounted() {
    setTimeout(()=>{
      const ids = this.mId;
      axios.get('/helpModul/friendship_link').then(
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
    pageList
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
.listBody4 {
    background-color: #ffffff;
    padding: 0;
    .listUlLink {
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: 10px;
        a {
          display: inline-block;
          width: 100%;
          padding: 22px 16px;
          color: #333;
          font-size: 16px;
          background-color: #f5f5f5;
        }
        a:hover {
          background-color: #005db5;
          color: #fff;
        }
      }
    }
}
</style>
