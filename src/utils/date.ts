/*
 * @Description:
 * @Autor: ZF
 * @Date: 2021-09-22
 * @LastEditors: ZF
 * @LastEditTime: 2021-09-22
 */
export function date(time:number,type:number = 0) {
	const date = new Date(Number(time));
	const Y = date.getFullYear();
	const M = date.getMonth()+1;
	const D = date.getDate();
	const h = date.getHours();
	const m = date.getMinutes();
	const s = date.getSeconds();
	
	switch(type){
		case 0: return Y+"-"+M+"-"+D+" "+h+":"+m+":"+s;break;
		case 1: let time: any = Y;
						if(M<10){
							time += '-0' + M
						}else {
							time += '-' + M
						}
						if(D<10){
							time += '-0' + D
						}else {
							time += '-' + D
						}
						return time;break;
		case 2: let times: any = '';
						if(D<10){
							times += '0' + D
						}else{
							times += D
						}
						if(h<10){
							times += '0' + h
						}else {
							times += h
						}
						if(m<10){
							times += '0' + m
						}else {
							times += m
						}
						if(s<10){
							times += '0' + s
						}else {
							times += s
						}
						return times;break;
	}
}
