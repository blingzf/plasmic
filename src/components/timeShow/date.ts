/*
 * @Description:
 * @Autor: ZF
 * @Date: 2021-09-27
 * @LastEditors: ZF
 * @LastEditTime: 2021-09-27
 */
export function date(time: number,type: number) : string{
	const date = new Date(Number(time));
	const Y:number = date.getFullYear();
	const M:number = date.getMonth()+1;
	const D:number = date.getDate();
	const h:number = date.getHours();
	const m:number = date.getMinutes();
	const s:number = date.getSeconds();
	let str = Y+"-"+ (M<10?'0'+M:M) +"-"+ (D<10?'0'+D:D);
	if(type === 1){
		str = Y+"-"+ (M<10?'0'+M:M) +"-"+ (D<10?'0'+D:D) +" "+ (h<10?'0'+h:h) +":"+ (m<10?'0'+m:m) +":"+ (s<10?'0'+s:s)
	}
	return str;
}
