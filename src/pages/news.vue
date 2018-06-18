<template lang="html">
  <div>
    <!-- 传递二级菜单位置信息 -->
    <content-view :msg="msg"></content-view>
  </div>
</template>

<script>
  import ContentView from '@/components/contentView'

  export default{
    props :{
      msg : {//获取当前所处二级菜单位置信息
        type : String,
        default : "",
        required : true
      }
    },
    components: {
      ContentView
    }
  }
</script>

<style lang="scss" scoped>

</style>
