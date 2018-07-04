
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 引入路由
import router from './router' //引入router文件夹下定义的路由，自己找.js文件中的路由
import store from './store' // 存储数据和管理数据方法的仓库
import '../mock/index' //mock数据
import  VueQuillEditor from 'vue-quill-editor' // 富文本编辑器
import 'quill/dist/quill.core.css' //核心样式

Vue.use(VueQuillEditor) //全局使用富文本编辑器

// 引入第三方资源
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@/assets/css/common.css'

new Vue({
  el : '#app',
  router: router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
