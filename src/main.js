import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav'
// 注册全局组件
Vue.component(TypeNav.name, TypeNav)
    // 引入路由
import router from '@/router'
// 引入数据仓库
import store from '@/store'
Vue.config.productionTip = false
    // 测试
import { getBaseCategoryList } from '@/api'
getBaseCategoryList();
new Vue({
    //注册路由
    render: h => h(App),
    // 注册路由信息：当这里书写router的时候，组件身上有$route $router的属性
    router,
    // 注册仓库，组件实例的身上会多一个$store属性
    store
}).$mount('#app')