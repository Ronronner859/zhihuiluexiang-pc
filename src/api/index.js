// 所有的api接口进行统一管理
import requests from "./request";
// 引入mock的接口
import mockRequest from "./mockAjax";
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
    // 切记当函数执行完需要把服务器返回结果返回
    //获取banner
export const reqgetBannerList = () => mockRequest({ url: '/banner', method: 'GET' })

// 获取floor数据
export const reqFlooerList = () => mockRequest({ url: '/floors', method: 'GET' })

/**
 * 获取搜索的数据 api/list  post 需要参数
 */
// 需不需要外部传递的参数？当前的这个接口给服务器传递的参数至少是一个空对象 不然会失败：必须有默认参数
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'POST',
    data: params
})