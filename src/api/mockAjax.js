// 对axios的二次封装
import axios from 'axios';
import nProgress from 'nprogress';
// 引入进度条的样式
import "nprogress/nprogress.css"
// 利用axios的方法create ，创建一个axios的实例
const requests = axios.create({
    // 基础路径
    baseURL: '/mock',
    // 请求超时的时间5秒
    timeout: 5000,
})

// 请求拦截器 进行拦截的 发出去之前进行拦截的一些业务
requests.interceptors.request.use((config) => {
        // 进入条开始
        nProgress.start()
            // config 配置对象 对象有个属性很重要 headers
        return config
    })
    // 响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done()
        // 成功的回调函数 服务器响应的数据 回来以后可以做一些事件
    return res.data
}, (error) => {
    return Promise.reject(new Error('failed to intercept request'))
});
export default requests