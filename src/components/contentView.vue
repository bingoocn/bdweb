<template lang="html">
  <div class="mainBox">
    <div class="row">
      <div class="col-sm-2" v-if="routeNum != 3">
        <p class="list-group-title">{{ msg }}</p>
        <div class="list-group" v-for = "(list, i) in menuList" v-if = "list.name == msg">
          <div v-for="(childList, i) in list.children" ref="Navli">
            <router-link class="list-group-item" activeClass="active" :to="childList.path" :mId="childList.mId">
              {{ childList.name }}
            </router-link>
          </div>
      </div>
    </div>
    <div :class = "[ routeNum == 3 ? 'col-sm-12' : 'col-sm-10' ]">
      <!-- 传递二级菜单ID -->
      <router-view :mId='mId'></router-view>
    </div>
  </div>
</div>
</template>

<script>
import menuList from '@/assets/js/menuList.js'
import comView from '@/components/textCon'

export default{
  data(){
    return {
      menuList: menuList,
      mId: '',
      routeNum: ''
    }
  },
  created() {
    this.routeNum = this.$route.matched.length;//根据路由判断当前位置，控制页面结构
  },
  props :{
    msg : {//获取二级菜单信息
      type : String,
      default : "",
      required : true
    }
  },
  updated : function(){
    var navLi = this.$refs.Navli;

    if(navLi == undefined){
      return;
    }
    for(var i=0; i<navLi.length; i++){
      if($($(navLi[i]).find(".active")).attr("mId")){
        this.mId = $($(navLi[i]).find(".active")).attr("mId");//设置二级菜单ID
      }
    }
  },
  components: {
    comView
  }
}
</script>

<style lang="scss" scoped>
.mainBox {
  background-color: #fff;
  padding: 10px 20px 20px;
  min-height: 700px;
  .list-group-title {
    font-size: 24px;
    color: #005db5;
    font-weight: bold;
    border-bottom: 1px solid #dddddd;
    padding-left: 15px;
    padding-bottom: 15px;
    margin-bottom: 0;
  }
  .list-group {
    padding-left: 0;
    margin-bottom: 20px;
    .list-group-item {
      border: 0;
      border-bottom: 1px solid #dddddd;
      margin-bottom: 0;
      font-size: 16px;
      color: #666;
    }
    .list-group-item.active {
      background: url(../assets/imgs/Bd_Dy_LulnavIco_03.png) no-repeat right center;
      color: #005db5;
    }
    .list-group-item:hover {
      background-color: #fff;
      color: #005db5;
    }
  }
}
</style>
