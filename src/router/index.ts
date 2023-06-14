/*
 * @Description:
 * @Autor: zf
 * @Date: 2022-04-19 
 * @LastEditors: zf
 * @LastEditTime: 2022-04-19
 */
import { createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw } from 'vue-router'

/**
 * 常量路由
 * 没有权限要求的页面，所有用户进入系统都可以看到的页面
 */
export const constantRoutes: Array<RouteRecordRaw>  = [ 
	{
		path: '/',
		name: 'Index',
		component: () => import('@/views/half/Index.vue'),
	},
  {
  	 path: '/error',
  	 name: 'Error',
  	 component: () => import('../views/exception/Index.vue'),
  	 meta: {
  		 title: '错误！',
  	 }
  },
	{
	  path: '/:pathMatch(.*)*',
	  component: () => import('@/views/exception/Index.vue'),
	  name:'Redirect',
	  meta:{
		  title: '未注册页面'
	  }
	}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
export default  router
