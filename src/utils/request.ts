/*
 * @Description:
 * @Autor: zf
 * @Date: 2021-03-01 
 * @LastEditors: zf
 * @LastEditTime: 2021-10-18 
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import store from '@/store'
import { getCookie, delForeverCookie } from './cookie'
import { Response } from '@/utils/response'
const list = ["登录已过期请重新登录","账号被封禁"];
const list_ = ["保持在线"];
/**
 * response: {
 * 		desc: "成功", // 问题描述
 * 		errorCode: 0,// 错误码 （唯一判断标准） 
 * 		result: {},
 *    status: "success"
 * }
 * 
 * */
 /**
  * 说明：基于axios的请求封装
  */
const service = axios.create({
	// headers: {
	// 	'Content-Type': 'text/plain'
	// },
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60 * 2 * 1000
});
/**
 * 说明：请求前拦截
 */
// service.interceptors.request.use(
//   config => {
//     config.headers['token'] = getCookie('token')
//     return config
//   },
//   error =>  Promise.reject(error)
// )
/**
 * 说明：响应拦截
 */
service.interceptors.response.use(
	(response:any) =>{
		return response.data;
	}
)
export default service