/*
 * @Description:
 * @Autor: zf
 * @Date: 2022-01-24 
 * @LastEditors: zf
 * @LastEditTime: 2022-01-24 
 */
import { MenuState,state } from './state';
// menu对象状态管理
const menu = {
	namespaced: true,
	state,
	mutations:{
		SET_INDEX: (state: MenuState,index: string) => {state.index = index},
		SET_NAME: (state: MenuState,name: string) => {state.name = name},
	},
	actions:{
		// 导航菜单选中index
		async setIndex({commit}: any,data: string){
			commit("SET_INDEX",data);
		},
		async setName({commit}: any,data: string){
			commit("SET_NAME",data);
		},
	}
}

 export default menu