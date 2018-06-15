<template lang="html">
  <div class="">
    这里是{{ name }}页
  </div>

</template>

<script>
  export default{
    data() {
      return {
        name: '特色内容'
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
