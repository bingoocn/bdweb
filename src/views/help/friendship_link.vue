<template lang="html">
  <div>
    <div class="listCon" v-if="routeNum != 3">
      <div class="row listHeader">
          <p class="col-xs-12 col-md-6">{{ name }}</p>
          <crumbs-con class="col-xs-12 col-md-6 text-right"></crumbs-con>
      </div>
      <div class="listBody4">
            <ul class="listUlLink">
                <li v-for = "(item, i) in data.data">
                  <a :href="item.url" target="_blank">{{ item.title }}</a>
                </li>
            </ul>
            <page-list :countPage='data.countPage'></page-list>
        </div>
    </div>
</div>
</template>

<script>
import { getFriendShip } from '../../axios/api'

export default{
  data() {
    return {
      name: '友情链接',
      data: '',
      routeNum: '',
      toName: 'friendship_link'//详情页路由name值
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;// 根据路由判断当前所处位置，控制详情页
    if(this.$route.matched.length > 2) return; // 判断是否处于内容页
    this.fetchData();
  },
  methods: {
    fetchData() {
      setTimeout(()=>{
        let pageNumber = this.$route.query.pageSize == undefined ? 1 : this.$route.query.pageSize;

        getFriendShip(pageNumber, 5).then(res => {
          this.data = res.data;
        })
      }, 5)
    }
  },
  watch: {
    '$route': 'fetchData'
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
