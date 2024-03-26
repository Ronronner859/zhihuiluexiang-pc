import { getBaseCategoryList } from '@/api'
const state = {
    // state 中的数据中的的默认的初始值不能乱写 服务器返回的
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
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
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}