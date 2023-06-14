/*
 * @Description:
 * @Autor: zf
 * @Date: 2021-04-18 
 * @LastEditors: zf
 * @LastEditTime: 2021-04-18
 */
import { createStore } from 'vuex';
import user from '@/store/modules/user/index';
import getters from '@/store/getters';

const store = createStore({
	modules:{
		user,
	},
	getters
})
export default store

