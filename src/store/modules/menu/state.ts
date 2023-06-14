/*
 * @Description: 导航菜单menu管理
 * @Autor: ZF
 * @Date: 2022-01-24 
 * @LastEditors: ZF
 * @LastEditTime: 2022-01-24 
 */
import { RouteRecordRaw } from 'vue-router';
export interface MenuState {
	index: string,
	name: string
}
export const state: MenuState = {
	index: 'dashboard',
	name: 'Dashboard'
}