/**
 * 功能：全局存cookie
 * 作者：张帆
 * 说明：底层封装cookie，可以进行增删改查
 * @创建日期：2020年12月31日
 * name->cookie名字
 * value->cookie值
 * option->data
 * data:
 * path->允许访问cookie路径（/）
 * @param {String} domain->允许访问cookie域名（.baidu.com）
 * @param {Number} expires->绝对过期时间（date.toUTCString()）
 * @param {Number} Max-Age->相对过期时间单位是秒优先级大于expires
 * @param {Boolean} secure->是否开启https传输(true/false)
 * @param {Boolean} HttpOnly->是否开启http访问模式，该模式前端不能通过document.cookie获得，防止xss读取cookie(true/false)
 * @param {String} comment->该cookie的用处说明，浏览器显示Cookie信息的时候显示该说明(String)
 * version->cookie使用的版本号（0表示Netscape规范，1表示RFC的协议规范）
 */ 
export function setForeverCookie(name:string,value:string) {
	var date =new Date()
	if(value != null&&name !== null){
		date.setTime(date.getTime()+12*30*24*60*60*1000)
		document.cookie = name +"="+value+";path=/;expires="+date.toUTCString()
	}
}
/**
 * 
 * 功能：全局删除cookie
 * 作者：张帆
 * 说明：底层封装cookie，可以进行增删改查
 * 创建日期：2020年12月31日
 * name->cookie名字
 * option->data
 * data:
  * path->允许访问cookie路径（/）
 * domain->允许访问cookie域名（.baidu.com）
  * expires->绝对过期时间（date.toUTCString()）
 * Max-Age->相对过期时间单位是秒（Number）优先级大于expires
 * secure->是否开启https传输(true/false)
 * HttpOnly->是否开启http访问模式，该模式前端不能通过document.cookie获得，防止xss读取cookie(true/false)
 * comment->该cookie的用处说明，浏览器显示Cookie信息的时候显示该说明(String)
 * version->cookie使用的版本号（0表示Netscape规范，1表示RFC的协议规范）
 */ 
export function delForeverCookie(name:string) {
	var date =new Date()
	if(name != null){
		date.setTime(date.getTime()-1000)
		document.cookie = name +"=null;path=/;expires="+date.toUTCString()
	}
}
/**
 * @description  增加/修改会话cookie 
 * 功能：获得cookie 
 * 作者：张帆 
 * 创建日期：2020年12月31日
 * @param {String} name
 * @param {String} value
 * @param {Date} time
 */ 
export function setCookie(name:string,value:string,time:number) {
	var date =new Date()
	if(time != undefined){
		date.setTime(date.getTime()+time*1000)
		document.cookie = name +"="+value+";expires="+date.toUTCString()
	}else{
		document.cookie = name+"="+value
	}
}
/**
 * @description  删除cookie 
 * 功能：获得cookie 
 * 作者：张帆 
 * 创建日期：2020年12月31日
 * @param {String} name
 */ 
export function delCookie(name:string) {
	var date =new Date()
	if(name != null){
		date.setTime(date.getTime()-1000)
		document.cookie = name +"=null;expires="+date.toUTCString()
	}
}
/**
 * @description  获得cookie 
 * 功能：获得cookie 
 * 作者：张帆 
 * 创建日期：2020年12月31日
 * 修改日期：2021年6月2日
 * @param {String} name
 * @return {String} 
 */ 
export function getCookie(name:string):string {
	var arr = document.cookie.split(';')
	var cookieValue = ''
	if(name === "all"){
		cookieValue = document.cookie
	}else{	
		for(const i in arr){
			if(arr[i].split('=')[0].trim() === name){
				cookieValue = arr[i].split('=')[1].trim()
			}
		}
	}
	return cookieValue
}