/* 负责全局自定义组件的注册 */
import UploadExcel from './UploadExcel'

export default {
    install(Vue) {
        // 组件注册
        Vue.component('UploadExcel', UploadExcel)
    }
}