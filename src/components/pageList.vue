<template lang="html">
  <div class="text-right">
      <nav aria-label="Page navigation">
          <ul class="pagination">
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
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intVal: 1,
      currentPage: 1,
      countPage: 10,
      path: ''
    }
  },
  mounted() {
    this.path = this.$route.path;

    if(this.$route.query.pageSize){
      this.currentPage = parseInt(this.$route.query.pageSize);
      this.intVal = parseInt(this.$route.query.pageSize);
    }
  },
  methods:{
    getVal(e) { // 获取跳转值
      if(parseInt(e.target.value) > parseInt(this.countPage)){
        this.intVal = parseInt(this.countPage);
        return ;
      };
      if(parseInt(e.target.value) < parseInt(this.intVal)){
        this.intVal = parseInt(this.intVal);
        return ;
      };
      this.intVal = parseInt(e.target.value);
    },
    goPage(e){ // 跳转
      if(parseInt(this.currentPage) > parseInt(this.countPage)){
        this.currentPage = parseInt(this.countPage);
        return ;
      };
      if(parseInt(this.currentPage) < parseInt(this.intVal)){
        this.currentPage = parseInt(this.intVal);
        return ;
      };
      this.currentPage = parseInt(this.intVal);
    },
    changeVal() { // 切换分页
      // this.intVal = parseInt(this.currentPage);
      if(parseInt(this.$route.query.pageSize) == 0) {
        this.$router.push({path: this.path})
      }
      this.$router.push({path: this.path, query: {pageSize: this.currentPage}})
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
