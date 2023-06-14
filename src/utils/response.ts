/*
 * @Description:
 * @Autor: zf
 * @Date: 2021-07-02
 * @LastEditors: zf
 * @LastEditTime: 2021-07-06
 */
import { AxiosResponse } from "axios";
/**
 * response: {
 * 		desc: "成功", // 问题描述
 * 		errorCode: 0,// 错误码 （唯一判断标准） 
 * 		result: {},
 *    status: "success"
 * }
 * 
 * */
export interface Response extends AxiosResponse{
	// robosen 项目定义
	desc?: string
	status?: number | string
	result?: any
	code?: string
	// 第一版
	retCode?:boolean
	success?:boolean
	resultMsg?:string
	message?:string
	error_code?: string
	data:any
}
