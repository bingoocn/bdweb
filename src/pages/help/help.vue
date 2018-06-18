<template lang="html">
  <div class="">
    这里是{{ name }}页
  </div>

</template>

<script>
  export default{
    data() {
      return {
        name: '帮助'
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
