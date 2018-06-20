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
    methods:{
        onEditorBlur(quill){//失去焦点事件
        },
        onEditorFocus(quill){//获得焦点事件
        },
        onEditorChange(quill){//内容改变事件
        }
    },
    mounted() {
      this.$refs.myQuillEditor.quill.enable(false);
      setTimeout(()=>{
        this.content = this.data.content;
      },200)
    }
}
</script>
<style lang="scss" scoped>
  .ql-toolbar.ql-snow,.ql-container.ql-snow{
    border: none !important;
  }
</style>
