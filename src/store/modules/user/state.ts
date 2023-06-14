/*
 * @Description:
 * @Autor: ZF
 * @Date: 2021-09-03 
 * @LastEditors: ZF
 * @LastEditTime: 2021-09-03 
 */
import { RouteRecordRaw } from 'vue-router';
export interface UserState {
	id: number
	username: string
	token: string
	phone: string
	privs: string[]
	number: string
}
export const state: UserState = {
	id:0,
	username: '',
	token: 'wjwhqojajauwjwuqwe',
	phone: '',
	privs: [],
	number: ''
}