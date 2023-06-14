/*
 * @Description:
 * @Autor: zf
 * @Date: 2022-04-18 
 * @LastEditors: zf
 * @LastEditTime: 2022-04-18 
 */
import { UserState,state } from './state';
import { setForeverCookie,getCookie } from '@/utils/cookie';
import { Response } from '@/utils/response'
// user对象状态管理
const user = {
	namespaced: true,
	state,
	mutations:{
		SET_USERNAME: (state:UserState,username:string) => {state.username = username},
		SET_TOKEN: (state:UserState,token:string) => {state.token = token},
		SET_PHONE: (state:UserState,phone:string) => {state.phone = phone},
		SET_PRIVS: (state:UserState,privs:string[]) => {state.privs = privs},
		SET_ID: (state:UserState,id:number) => {state.id = id},
		SET_NUMBER: (state:UserState,number:string) => {state.number = number}
	},
	actions:{
		// // 获得用户token
		// async setUser({commit}:any,data:any){
		// 	let res = await login(data);
		// 	if((<Response>res).success){
		// 		setForeverCookie('token',res.data.token);
		// 		commit("SET_USERNAME",data.username);
		// 	}
		// },
		// 获得用户手机号
		async setPhone({commit}:any,data:any){
			commit("SET_PHONE",data);		
		},
		// 获得用户编号
		async setNumber({commit}:any,data:any){
			commit("SET_NUMBER",data);		
		},
		// 获得用户信息
		async getInfo({commit}:any){
			const token = getCookie('token');
			commit("SET_TOKEN",token);
			// let res = await getInfo();
			// if((<Response>res).success) {
			// 	// try是为了捕获不同路由权限的问题情况
			// 	try{
			// 		commit("SET_TOKEN",token);
			// 		commit("SET_ID",res.data.info.account.id);
			// 		commit("SET_ROLE",res.data.info.role.name);
			// 		commit("SET_PRIVS",res.data.privs);
			// 		return true
			// 	}catch(e){
			// 		console.log('错误',e)
			// 	}
			// }
		},
		async clearToken({commit}:any){
			commit("SET_TOKEN","");
		}
	}
}

 export default user