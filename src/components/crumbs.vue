<template lang="html">
    <ol class="breadcrumb">
        <li><router-link :to="{ path:'/home' }"><i class="glyphicon glyphicon-home"></i> 首页</router-link></li>
        <li class="active">{{ firstMenu }}</li>
        <li class="active">{{ secondMenu }}</li>
    </ol>
</template>

<script>

export default {
  data() {
    return {
      firstMenu: '' ,
      secondMenu: ''
    }
  },
  created() {
    this.firstMenu = this.$route.matched[0].name;
    this.secondMenu = this.$route.matched[1].name;
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
    }
    li.active {
      color: #777;
    }
  }
}
</style>
