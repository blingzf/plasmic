/*
 * @Description:
 * @Autor: zf
 * @Date: 2021-07-29
 * @LastEditors: zf
 * @LastEditTime: 2021-07-29
 */
import store from '@/store/index'
export function checkRead(item:string) {
	const privs:string[] = store.getters.privs;
	return privs.includes(item);
}