import request from '@/utils/request'

// 登陆
export function login(data) {
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })
}

// 获取用户信息
export function getUserInfo() {
    return request({
        url: '/sys/profile',
        method: 'post',
    })
}

// 获取用户头像
export function getUserDetailById(id) {
    return request({
        url: `/sys/user/${id}`,
        method: 'GET',
    })
}


export function logout() {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post'
    })
}