import router from "@/router";
import store from "@/store";
import getters from '@/store/getters'
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import { getUSerInfo } from "./api/user";

// 白名单
const whiteList = ['/login', '/404']

// 前置守卫
router.beforeEach(async(to, from, next) => {
    // 开启进度条
    nprogress.start()
    console.log(getters);
    if (store.getters.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            if (!store.getters.userId) {
                await store.dispatch('user/getUSerInfo')
            }
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