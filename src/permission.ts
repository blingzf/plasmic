/*
 * @Description: 导航守卫
 * @Autor: zf
 * @Date: 2021-05-28 
 * @LastEditors: zf
 * @LastEditTime: 2021-07-12 
 */
import { RouteLocationNormalized,RouteRecordRaw } from 'vue-router';
import router from '@/router/index';
import store from '@/store/index';
import asyncRoute from '@/router/asyncRoute/baseRoute'
import { getCookie } from '@/utils/cookie';
import { token } from '@/setting';

// 导航守卫对路由跳转前进行处理
let write = true;
router.beforeEach(async(to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {

	// if(!token){
	// 	store.dispatch('menu/setIndex',to.path.substring(1));
	// 	next();
	// }else {
	// 	let accountToken = getCookie('token');
	// 	if(accountToken){
	// 		if(!store.getters.token){
	// 		  await store.dispatch('user/getInfo');
	// 		}else {
	// 			if(to.path === '/login'){
	// 				next('/');
	// 			}else{
					if(write){
						write = false;
						next(to.path);
					}else{
						next();
					}
	// 			}
	// 		}
	// 	}else{
	// 		if (whiteList.indexOf(to.path) !== -1) {
	// 			next();
	// 		} else {
	// 			next(`/login?redirect=${to.path}`);
	// 		}
	// 	}
	// }
})