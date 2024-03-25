// 所有的api接口进行统一管理
import requests from "./request";

//三级联动的接口
//  /api/product/getBaseCategoryList get 参数无

// export const getBaseCategoryList = () => {
//     // 发请求
//     return requests({
//         url: '/product/getBaseCategoryList',
//         method: 'GET',
//     })
// }

// 简写
export const getBaseCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'GET' })