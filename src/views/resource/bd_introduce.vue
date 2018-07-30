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
                  <router-link :to="{name:toName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
                  date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank">
                    {{ item.title }}
                  </router-link>
                </li>
            </ul>
            <page-list :countPage="data.countPage"></page-list>
        </div>
    </div>
    <!-- 详情页 -->
    <router-view></router-view>
</div>
</template>

<script>
import { getScience } from '../../axios/api'

export default{
  data() {
    return {
      name: '兵器介绍',
      data: '',
      routeNum: '',
      toName: 'bd_introduce',
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
        const ids = this.mId;
        let pageNumber = this.$route.query.pageSize == undefined ? 1 : this.$route.query.pageSize;

        getScience(ids, pageNumber, 5).then(res => {
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
