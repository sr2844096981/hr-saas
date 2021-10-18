import request from '@/utils/request'
/**
 * 获取角色列表
 * ***/
export function getRoleList(params) {
  return request({
    url: '/sys/role',
    params
  })
}
/** **
 *
 * 获取企业的信息
 * ***/
export function getCompanyInfo(companyId) {
  return request({
    url: `/company/${companyId}`
  })
}
/**
 * 删除角色
 * **/

export function deleteRole(id) {
  return request({
    url: `/sys/role/${id}`,
    method: 'delete'
  })
}
/** *
 *  读取角色详情
 * ***/
export function getRoleDetail(id) {
  return request({
    url: `/sys/role/${id}`
  })
}
/** *
 *  读取角色详情
 * ***/
export function updateRole(data) {
  return request({
    url: `/sys/role/${data.id}`,
    method: 'put',
    data
  })
}

/** **
 *  新增角色
 *
 * ****/
export function addRole(data) {
  return request({
    url: '/sys/role',
    method: 'post',
    data
  })
}
// 给角色分配权限
export function assignPerm(data) {
  return request({
    url: '/sys/role/assignPrem',
    method: 'put',
    data
  })
}
