import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })
}

export function getUSerInfo() {
    return request({
        url: '/sys/profile',
        method: 'post',
    })
}

export function logout() {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post'
    })
}