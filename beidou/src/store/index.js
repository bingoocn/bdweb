import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //使用扩展插件Vuex

const state = { // 存值，将多个共享的值放入state中，state中的值作为状态可被多个组件共享
  vx_msg: '123'
}
const mutations = { // 定义的是若干的方法
  changeMsg(state, value) { // 参数state被改变的数据,参数value是组件中通过commit方法提交过来的值
    state.vx_msg = value;
  }
}
export default new Vuex.Store({ // Store类就是存储数据和管理数据方法的仓库，实现方式是将数据和方法以对象形式传入其实例中,注意一个应用或是项目中只能存在一个Store实例！！
  state, // 数据源存放地
  mutations
})
