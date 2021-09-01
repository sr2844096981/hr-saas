/* 管理所有的自定义指令 */

// 处理图片错误
export const imageerror = {
    inserted(dom, options) {
        dom.onerror = function() {
            dom.src = options.value
        }
    }
}