import { reqGetSearchInfo } from "@/api"

const state = {
    // searchList 不能乱写
    searchList: {}
}
const mutations = {
    GETSEARCHINFO(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
        // 获取search模块的数据 dispatch的时候回派发一个action的传递过来的，第二个参数传递过来的至少一个空对象
        async getSearchInfo({ commit }, params = {}) {
            let result = await reqGetSearchInfo(params)
            console.log(result);
            if (result.code == 200) {
                commit("GETSEARCHINFO", result.data)
            }
        }
    }
    // 简化数据而生 计算属性 组件中要用的数据进行简化
const getters = {
    // goodsList(state) {
    //     // 返回的数据会有两种情况
    //     return state.searchList.goodsList || []
    // },
    // es5写法
    goodsList: state => state.searchList.goodsList,
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}