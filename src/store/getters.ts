/*
 * @Description:
 * @Autor: zf
 * @Date: 2022-04-18 
 * @LastEditors: zf
 * @LastEditTime: 2022-04-18
 */
const user = {
	id: (state:any) => state.user.id,
	username: (state:any) => state.user.username,
	privs: (state:any) => state.user.privs,
	phone: (state:any) => state.user.phone,
	token: (state:any) => state.user.token,
	number: (state:any) => state.user.number,
}

const getters = {
	...user,
}
export default getters