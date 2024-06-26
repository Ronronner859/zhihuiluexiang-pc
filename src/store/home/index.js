import { getBaseCategoryList, reqgetBannerList, reqFlooerList } from '@/api'
const state = {
    // state 中的数据中的的默认的初始值不能乱写 服务器返回的
    categoryList: [],
    bannerList: [],
    floorsList: [],
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOERSLIST(state, floorsList) {
        state.floorsList = floorsList
    }

}
const actions = {
        // 通过api里面的接口函数调用 向服务器发送请求 获取服务器的数据
        // 引入api
        async categoryList({ commit }) {
            let result = await getBaseCategoryList()
            if (result.code === 200) {
                commit('CATEGORYLIST', result.data)
            }
        },
        // 获取首页的轮播图的数据
        async getBannerList({ commit }) {
            let res = await reqgetBannerList()
            if (res.code === 200) {
                commit('GETBANNERLIST', res.data);
            }
        },
        async getFlooerList({ commit }) {
            let res = await reqFlooerList();
            if (res.code === 200) {
                commit('GETFLOERSLIST', res.data);
            }
        }
    }
    /**
     * 1.action做异步操作
     * 2.state中定义好返回的数据
     * 3.提交给mutations
     *
     */
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}