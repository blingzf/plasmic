/*
 * @Description:
 * @Autor: zf
 * @Date: 2021-11-15 
 * @LastEditors: zf
 * @LastEditTime: 2021-11-15 
 */
// 多级筛选默认筛选条件为chlidren
export function screen(data: any[],key: string = "children" ){
	let list = [] as any[];
	data.forEach((item) => {
		if(item[key]){
			list = list.concat(screen(item.children));
		}
		list.push(item)
	})
	return list;
}