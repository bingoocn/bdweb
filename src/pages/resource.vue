<template lang="html">
  <div>
    <content-view :msg="msg"></content-view>
  </div>
</template>

<script>
  import ContentView from '@/components/contentView'

  export default{
    props :{
      msg : {
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
