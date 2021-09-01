import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { getUserInfo, login, getUserDetailById } from '@/api/user'

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
        context.commit('setToken', result)
        setTimeStamp() // 写入时间戳 将当前最新时间写入缓存
    },
    async getUserInfo(context, data) {
        const result = await getUserInfo(data)
        const baseInfo = await getUserDetailById(result.userId)
        const baseResult = {...result, ...baseInfo } // 合并用户信息
        context.commit('setUserInfo', baseResult)
        return result
    },
    logout(context) {
        context.commit('removeToken')
        context.commit('removeUserInfo')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}