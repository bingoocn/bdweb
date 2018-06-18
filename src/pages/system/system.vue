<template lang="html">
  <div class="">
    这里是{{ name }}页
  </div>

</template>

<script>
  export default{
    data() {
      return {
        name: '系统'
      }
    }
  }
</script>

<style lang="scss" scoped>
  html,body{
    div{
      color: white;
    }
  }
</style>
