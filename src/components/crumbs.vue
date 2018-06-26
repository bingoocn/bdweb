<template lang="html">
    <ol class="breadcrumb">
        <li @click="changeShow()"><router-link :to="{ path:'/home' }"><i class="glyphicon glyphicon-home"></i> 首页</router-link></li>
        <li @click="changeShow()"><router-link :to="{ path:firstPath }">{{ firstMenu }}</router-link></li>
        <li @click="changeShow()"><router-link :to="{ path:secondPath }">{{ secondMenu }}</router-link></li>
    </ol>
</template>

<script>

export default {
  data() {
    return {
      firstMenu: '',
      firstPath: '',
      secondMenu: '',
      secondPath: ''
    }
  },
  created() {
    this.firstMenu = this.$route.matched[0].name;
    this.firstPath = this.$route.matched[0].path + this.$route.matched[0].path.split('Modul')[0];
    this.secondMenu = this.$route.matched[1].name;
    this.secondPath = this.$route.matched[1].path;
  },
  inject: ['reload'],//注入reload方法
  methods:{
    changeShow() {//目前在未进行开发的模块下会卡死
      this.reload();
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
  .breadcrumb {
    display: inline-block;
    background-color: #fff;
    margin-bottom: 8px;
    li {
      display: inline-block;
      a{
        text-decoration: none;
        color: #777;
      }
    }
    li.active {
      color: #777;
    }
  }
}
</style>
