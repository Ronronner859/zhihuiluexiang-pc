// 使用 Mock
var Mock = require('mockjs')
    //webpack中图片和json都是默认对外暴露的
import banners from './banners.json'
import floors from './floors.json'

// 第一个参数时地址 第二个是数据
Mock.mock('/mock/banners', { code: 200, data: banners })
Mock.mock('/mock/floors', { code: 200, data: floors })