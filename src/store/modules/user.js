import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
    token: getToken() // 设置token为共享状态 初始化vuex时 先从缓存中读取
}

const mutations = {
    setToken(state, token) {
        state.token = token
        setToken(token)
    },
    removeToken(state) {
        state.token = null
        removeToken()
    }
}

const actions = {
    async login(context, data) {
        const result = await login(data)
        context.commit('setToken', result)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}