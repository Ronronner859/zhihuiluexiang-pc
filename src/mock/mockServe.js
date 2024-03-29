// 使用 Mock
var Mock = require('mockjs')
    //webpack中图片和json都是默认对外暴露的
import banner from './banner.json'
import floors from './floors.json'

// 第一个参数时地址 第二个是数据
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floors', { code: 200, data: floors })