import { getToken, setToken, removeToken } from '@/utils/auth'
import { getUSerInfo, login } from '@/api/user'

const state = {
    token: getToken(), // 设置token为共享状态 初始化vuex时 先从缓存中读取
    userInfo: {},
}

const mutations = {
    setToken(state, token) {
        state.token = token
        setToken(token)
    },
    removeToken(state) {
        state.token = null
        removeToken()
    },
    setUserInfo(state, result) {
        state.userInfo = result
    },
    removeUserInfo(state) {
        state.userInfo = {}
    }
}

const actions = {
    async login(context, data) {
        const result = await login(data)
        console.log(result);
        context.commit('setToken', result)
    },
    async getUSerInfo(context, data) {
        const result = await getUSerInfo(data)
        context.commit('setUserInfo', result)
        return result
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}