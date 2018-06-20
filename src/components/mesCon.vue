<template lang="html">
  <div>
    <div class="introTitle">{{ data.title }}</div>
    <div class="listBody2">
      <editor-modul :data='data'></editor-modul>
    </div>
  </div>
</template>

<script>
import editorModul from '@/components/editor'


export default {
  components: {
    editorModul
  },
  props: {
    mId: {
      type: String,
      default: '',
      required: true
    },
    data : {
      default : "",
      required : true
    }
  }
}
</script>

<style lang="scss" scoped>
  .introTitle {
    padding: 16px 20px;
    font-size: 18px;
    color: #fff;
    background-color: #005db5;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .listBody2 {
    background-color: #f5f5f5;
    padding: 5px 15px 15px;
    .ptitle, .ptext {
      text-indent: 2em;
      font-size: 16px;
      color: #333;
    }
    .ptext {
      line-height: 150%;
      margin-bottom: 23px;
    }
  }
</style>
