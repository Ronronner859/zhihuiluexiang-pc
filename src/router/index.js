// 配置路由
import Vue from 'vue';
// 引入 vue-router
import VueRouter from 'vue-router';
// 使用
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
// 配置路由 对外暴露
export default new VueRouter({
    // 配置路由
    mode: 'history',
    routes: [{
            path: '/home',
            // 写component 不是components
            component: Home,
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            // 重定向：项目跑起来的时候，访问/,立马让他定向到首页
            path: '*',
            redirect: "/home"
        }
    ]
});