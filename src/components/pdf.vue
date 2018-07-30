<template lang="html">
  <div class="wrap">
    <embed id="plugin" :src="data" width="100%" height="700px">
  </div>
</template>

<script>
import baseUrl from '@/axios/baseUrl'

export default {
  data() {
    return {
      data:""
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      setTimeout(()=>{
        let lId = this.$route.params.date.split('_')[1];
        this.data = baseUrl.showResource +'/'+ lId;
      }, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: black;
  z-index: 10;
  #plugin {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
  }
}
</style>
