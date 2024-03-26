import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
    // 引入小仓库
import home from './home'
import search from './search'

//对外暴露store的一个实例
export default new Vuex.Store({
    // 实现vuex仓库模块化开发存储数据
    modules: {
        home,
        search
    }
})