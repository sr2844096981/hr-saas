import axios from 'axios'
import store from '@/store'
import { Promise } from 'core-js'
import { Message } from 'element-ui'
import { getTimeStamp } from '@/utils/auth'
import router from '@/router'
const TimeOut = 3600

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
    if (store.getters.token) {
        if (isCheckTimeOut()) {
            store.dispatch('user/logout') // 登出操作
            router.push('/login')
            return Promise.reject(new Error('登陆超时！'))
        }
        config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(response => {
    const { success, message, data } = response.data
    if (success) {
        return data
    } else {
        Message.error(message)
        return Promise.reject(new Error(message))
    }
}, error => {
    if (error.response && error.response.data && error.response.data.code === 10002) {
        // 当等于10002的时候 表示 后端告诉我token超时了
        store.dispatch('user/logout') // 登出action 删除token
        router.push('/login')
    } else {
        Message.error(error.message)
    }
    return Promise.reject(error)
})

// token超时
function isCheckTimeOut() {
    let currentTime = Date.now() // 当前时间戳
    let timeStamp = getTimeStamp() // 缓存时间戳
    return (currentTime - timeStamp) / 1000 > TimeOut
}
export default service