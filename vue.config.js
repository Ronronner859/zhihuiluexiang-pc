const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // 代理跨域
    //...
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                // 已有api 去掉
                // pathRewrite: { '^/api': '' },
            },
        },
    },

})