## 智慧乐坊商城 pc端

## 搭建步骤

1.导入静态的架构
2.引入less,下载less依赖
3.在根组件引入header、Footer组件
4.注册、使用组件
5.路由的引入(路由搭建）下载vue-router npm install --save vue-router
![alt text](./readimg/image.png) 注意安装的版本-一般安装稳定版
  components文件夹：放置的是非路由组件（哪里需要哪里搬）
  pages|views文件夹：放置的路由组件（路由组件有四个-Home Search Login Register
5.1 配置路由
项目当中配置的路由放置在router中
    创建router文件夹：
    // 配置路由
    import vue from 'vue';
    // 引入 vue-router
    import vueRouter from 'vue-router'; 
    <!-- 使用 -->
    Vue.use(vueRouter)
5.2 路由配置的小结
    路由组件和非路由组件的区别？
    1.路由组件一般放置在pages|views文件当中 非路由组件一般放置在components文件夹中
    2.路由组件一般需要在router中文件中进行注册（使用是组件的名字），非路由使用的时候，一般都是以标签的方式使用
    路由四步走
    ![alt text](./readimg/image-1.png)
    3.注册完路由：不管是路由组件和非路由组件都有$route\$router属性
    $route :一般获取路由信息【路径、query、params等】
    $router:一般进行编程式导航进行路由跳转【push|replace】
5.3 路由的跳转
    两种形式：
        1.声明式导航：router-link,可以进行路由的跳转
        2.编程式导航：push|replace，可以进行路由的跳转

        编程式导航：声明式导航能做到的，编程式导航都能做
        但是除了编程式导航，还可以进行路由跳转，还可以做一些其他的业务逻辑