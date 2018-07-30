<template>
     <quill-editor :content="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'

export default{
    data(){
        return {
            content: '',
            editorOption:{
                readOnly: true,
                modules:{
                    toolbar:[],
                },
                placeholder: '',
                gramm: true
            }
        }
    },
    props: {
      data : {
        default : "",
        required : true
      }
    },
    methods: {
      fetchData() {
        this.$refs.myQuillEditor.quill.enable(false);
        var getData = setInterval(()=>{
          if(this.data){
            if(this.data.content){
              this.content = this.data.content;
            }else{
              this.content = this.data;
            }

            clearInterval(getData)
          }
        },50)
      },
      onEditorBlur(quill){//失去焦点事件
      },
      onEditorFocus(quill){//获得焦点事件
      },
      onEditorChange(quill){//内容改变事件
      }
    },
    mounted() {
      this.fetchData();
    }
}
</script>
<style lang="scss" scoped>

</style>
