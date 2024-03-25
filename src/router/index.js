// 配置路由
import Vue from 'vue';
// 引入 vue-router
import VueRouter from 'vue-router';
// 使用
Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push(location) {
//         return originalPush.call(this, location).catch(err => err)
//     }
// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
// 先把VueRouter原型对象中的push保存一份
let originPush = VueRouter.prototype.push
    // 重写push | replace
    // 第一个参数：告诉原来的push方法，你往哪里跳转(传递哪些参数)
    // 第二个参数：成功的回调
    // 第三个参数：失败的回调
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        /**
         * 如果直接originPush()这样调用，那么上下文是window
         * call和apply的区别
         *  相同点：都可以改变函数的上下文
         *  不同点，call传参用逗号隔开，apply传参使用数组
         */
        originPush.call(this, location, resolve, reject)
    } else {
        // 如果没有回调，那么手动加上回调
        originPush.call(this, location, () => {}, () => {})
    }
}

// 配置路由 对外暴露
export default new VueRouter({

    routes: [{
            path: '/home',
            // 写component 不是components
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: '/search:keyword',
            component: Search,
            meta: {
                show: true
            },
            name: "search",
        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },
        // {
        //     // 重定向：项目跑起来的时候，访问/,立马让他定向到首页
        //     path: '*',
        //     redirect: "/home"
        // }
    ]
});