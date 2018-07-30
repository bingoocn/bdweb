<template lang="html">
  <div class="text-right">
      <nav aria-label="Page navigation">
          <ul class="pagination" v-if="!pType">
              <li @click="currentPage = 1;changeVal()" :class = "[ currentPage == 1 ? 'disabled' : '' ]">
                <router-link :to="{ path: path, query: {pageSize: 1} }">
                  首页
                </router-link>
              </li>
              <li :class = "[ currentPage == 1 ? 'disabled' : '' ]" @click="currentPage <= 1 ? 1 : currentPage--;changeVal()">
                  <router-link :to="{ path: path, query: {pageSize: parseInt(currentPage)-1 == intVal ? 1 : parseInt(currentPage)-1} }">
                    <span aria-hidden="true">上一页</span>
                  </router-link>
              </li>
              <li :class = "[ currentPage == countPage ? 'disabled' : '' ]" @click="currentPage >= countPage ? countPage : currentPage++;changeVal()">
                  <router-link :to="{ path: path, query: {pageSize: currentPage >= countPage ? countPage : parseInt(currentPage)+1} }">
                    <span aria-hidden="true">下一页</span>
                  </router-link>
              </li>
              <li @click="currentPage = countPage;changeVal()" :class = "[ currentPage == countPage ? 'disabled' : '' ]">
                <router-link :to="{ path: path, query: {pageSize: countPage} }">
                  尾页
                </router-link>
              </li>
              <li class="toPage">
                <a>
                  第<input type="text" name="" :value="currentPage" @change="getVal($event)">页
                  <button type="button" name="button" @click="goPage($event);changeVal()">GO ➜</button>
                </a>
              </li>
              <li class="countSize">第{{ currentPage }}页 / 共{{ countPage }}页</li>
          </ul>
          <ul class="pagination" v-if="pType && pType=='searchL'">
              <li @click="currentPage = 1;changeVal()" :class = "[ currentPage == 1 ? 'disabled' : '' ]">
                <router-link :to="{path:'/search', query:{keyword:this.$route.query.keyword,
                  pageNum:'1',page:'4',startTime:''+this.$route.query.startTime == 'undefined'?'':this.$route.query.startTime+'',endTime:''+this.$route.query.endTime== 'undefined'?'':this.$route.query.endTime+''}}">
                  首页
                </router-link>
              </li>
              <li :class = "[ currentPage == 1 ? 'disabled' : '' ]" @click="currentPage <= 1 ? 1 : currentPage--;changeVal()">
                  <router-link :to="{path:'/search', query:{keyword:this.$route.query.keyword,
                    pageNum:parseInt(currentPage)-1 == intVal ? 1 : parseInt(currentPage)-1,page:'4',
                    startTime:''+this.$route.query.startTime == 'undefined'?'':this.$route.query.startTime+'',endTime:''+this.$route.query.endTime== 'undefined'?'':this.$route.query.endTime+''}}">
                    <span aria-hidden="true">上一页</span>
                  </router-link>
              </li>
              <li :class = "[ currentPage == countPage ? 'disabled' : '' ]" @click="currentPage >= countPage ? countPage : currentPage++;changeVal()">
                  <router-link :to="{path:'/search', query:{keyword:this.$route.query.keyword,
                    pageNum:currentPage >= countPage ? countPage : parseInt(currentPage)+1,page:'4',
                    startTime:''+this.$route.query.startTime == 'undefined'?'':this.$route.query.startTime+'',endTime:''+this.$route.query.endTime== 'undefined'?'':this.$route.query.endTime+''}}">
                    <span aria-hidden="true">下一页</span>
                  </router-link>
              </li>
              <li @click="currentPage = countPage;changeVal()" :class = "[ currentPage == countPage ? 'disabled' : '' ]">
                <router-link :to="{path:'/search', query:{keyword:this.$route.query.keyword,
                  pageNum:countPage,page:'4',startTime:''+this.$route.query.startTime == 'undefined'?'':this.$route.query.startTime+'',endTime:''+this.$route.query.endTime== 'undefined'?'':this.$route.query.endTime+''}}">
                  尾页
                </router-link>
              </li>
              <li class="toPage">
                <a>
                  第<input type="text" name="" :value="currentPage" @change="getVal($event)">页
                  <button type="button" name="button" @click="goPage($event);changeVal()">GO ➜</button>
                </a>
              </li>
              <li class="countSize">第{{ currentPage }}页 / 共{{ countPage }}页</li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intVal: 1,
      currentPage: 1,
      path: '',
    }
  },
  props: {
    countPage:{
      default: '',
      required: true
    },
    pType:{
      default: '',
      type: String
    }
  },
  mounted() {
    this.path = this.$route.path;
    if(this.$route.query.pageSize){
      this.currentPage = parseInt(this.$route.query.pageSize);
    }else if(this.$route.query.pageNum){
      this.currentPage = parseInt(this.$route.query.pageNum);
    }
  },
  methods:{
    getVal(e) { // 获取跳转值
      if(parseInt(e.target.value) > parseInt(this.countPage)){
        this.currentPage = parseInt(this.countPage);
        return ;
      };
      if(parseInt(e.target.value) < parseInt(this.intVal) || parseInt(e.target.value) == ""){
        this.currentPage = parseInt(this.intVal);
        return ;
      };
      this.currentPage = parseInt(e.target.value);
    },
    goPage(e){ // 跳转
      if(parseInt(this.currentPage) > parseInt(this.countPage)){
        this.currentPage = parseInt(this.countPage);
        return ;
      };
      if(parseInt(this.currentPage) < parseInt(this.intVal) || parseInt(this.currentPage) == ""){
        this.currentPage = parseInt(this.intVal);
        return ;
      };
      this.currentPage = parseInt(this.currentPage);
    },
    changeVal() { // 切换分页
      if(parseInt(this.$route.query.pageSize) == 0) {
        this.$router.push({path: this.path})
      }
      if(this.pType && this.pType=='searchL'){
        this.$router.push({path: '/search', query:{keyword:this.$route.query.keyword,pageNum:this.currentPage,page:'4',startTime:this.$route.query.startTime,endTime:this.$route.query.endTime}})
      }else{
        this.$router.push({path: this.path, query: {pageSize: this.currentPage}})
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination{
    li{
      a, span{
        color: #555;
        user-select: none;
      }
      a:hover, a:focus, a:active{
        background: none;
      }
    }
    li.disabled{
      a{
        background:#eee;
      }
    }
    li.countSize{
      position: relative;
      float: left;
      padding: 6px 12px;
      margin-left: -1px;
      line-height: 1.42857143;
      text-decoration: none;
    }
    li.toPage{
      margin-left: 10px;
      a{
        padding: 0 10px;
        margin: 0;
        height: 34px;
        border: none;
        background: none;
        input{
          margin: 0 5px;
          width: 54px;
          height: 100%;
          outline: none;
          text-align: center;
        }
        input.error{
          border: 1px solid red;
        }
        button{
          padding: 5px 12px;
          background-color: #286090;
          border: 1px solid #204d74;
          color: #fff;
          outline: none;
        }
      }
      a:hover, a:focus, a:active{
        background: none;
      }

    }
  }

</style>
