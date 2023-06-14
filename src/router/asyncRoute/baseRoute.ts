/**
 * @Description: 动态路由编写
 * @Autor: zf
 * @Date: 2021-03-01 
 * @LastEditors: zf
 * @LastEditTime: 2021-09-03
 * 
 * 动态路由
 * 有权限要求的页面，不同用户进入系统，可以看到不同的页面
 */
import { RouteRecordRaw } from 'vue-router'
const asynsRoute: Array<RouteRecordRaw> = [	
	{
		 path: '/system',
		 name: 'System',
		 component: () => import('@/views/index/Index.vue'),
		 meta: {
			title: "系统管理", 
			icon:'',
			privs:[]
		 },
		 children:[

		 ]
	}
]
export default asynsRoute