import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

// 引入第三方资源
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import '@/assets/css/common.css'

import crumbsCon from '@/components/crumbs'
import mesCon from '@/components/mesCon'
import pageList from '@/components/pageList'
import mesList from '@/components/mesList'
import mediaList from '@/components/mediaList'
import textList from '@/components/textList'

Vue.use(VueQuillEditor) //全局使用富文本编辑器
// 引入公共组件
Vue.component('crumbs-con', crumbsCon)
Vue.component('mes-con', mesCon)
Vue.component('page-list', pageList)
Vue.component('mes-list', mesList)
Vue.component('media-list', mediaList)
Vue.component('text-list', textList)


new Vue({
  el : '#app',
  router: router,
  template: '<App/>',
  components: {
    App
  }
})
