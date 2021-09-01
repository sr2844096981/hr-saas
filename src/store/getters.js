const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token, // 建立token的快捷访问
    avatar: state => state.user.userInfo.staffPhoto,
    userId: state => state.user.userInfo.userId,
    name: state => state.user.userInfo.username,
}
export default getters