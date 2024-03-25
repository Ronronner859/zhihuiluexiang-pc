import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
Vue.config.productionTip = false

new Vue({
    //注册路由
    render: h => h(App),
    // 注册路由信息：当这里书写router的时候，组件身上有$route $router的属性
    router
}).$mount('#app')