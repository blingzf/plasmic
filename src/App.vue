<!--
 * @Description:
 * @Autor: zf
 * @Date: 2021-05-24 
 * @LastEditors: zf
 * @LastEditTime: 2021-10-18 
--> 
<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import store from '@/store/index';
import router from '@/router/index';
// import { ElLoading } from 'element-plus';
// let loadingInstance = ElLoading.service({ fullscreen: true });
export default {
  name: 'App',
	created() {
			// 在页面加载时
			// 关闭loading动画
			// loadingInstance.close();
			// 在页面刷新时将vuex里的信息保存到sessionStorage里
			// window.addEventListener("beforeunload",()=>{
				// sessionStorage.setItem("store",JSON.stringify(store.state))
			// })
	},
	
}
</script>

<style lang="scss">
	@import url("assets/style/css/global.css");
	$baseFont: #202020;
	#app {
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		color: $baseFont;
		// font-family: 'pingfangsc';
		-webkit-text-size-adjust: none;
		// background-color: #f9b233;
		font-size: 0px;
		font-weight: 400;
	}
</style>
