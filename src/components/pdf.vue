<template lang="html">
  <div class="wrap">
    <embed id="plugin" :src="data.src" width="100%" height="700px">
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:{
        src: "http://www.beidou.gov.cn/xt/gfxz/201802/P020180209623601401189.pdf",
        type: "application/pdf"
      }
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
