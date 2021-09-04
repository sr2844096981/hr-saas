import router from "@/router";
import store from "@/store";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'

// 白名单
const whiteList = ['/login', '/404']

// 前置守卫
router.beforeEach((to, from, next) => {
    // 开启进度条
    nprogress.start()
    if (store.getters.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next('/login')
        }
    }
})

// 后置守卫
router.afterEach(() => {
    nprogress.done()
})