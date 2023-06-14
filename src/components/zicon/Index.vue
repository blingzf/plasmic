<!--
 * @Description: 自定义iconfont图标
 * @Autor: ZF 
 * @Date: 2021-11-16
 * @LastEditors: ZF
 * @LastEditTime: 2021-11-16
 *  
 import { default as ZIcon } from '../../../components/authImg/Index.vue'; 
 export default{
 	 components:{
 		 Icon
	 }
 }
 <ZIcon
 	:effect="" 文字提示的主题颜色0-dark,1-light默认0
 	:content=""  显示的内容
 	:placement="" 出现的位置top;top-start;top-end
												bottom;bottom-start;bottom-end/
												left;left-start;left-end/
												right;right-start;right-end
 >
 	<i class="iconfont icon" @click.stop="click">{{icon}}</i>
 </ZIcon>
--> 
<template>
	<el-tooltip
		:effect="effect?'light':'dark'"
		:content="content"
		:placement="position"
	>
		<i class="iconfont icon" @click.stop="click">{{icon}}</i>
	</el-tooltip>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs, onMounted, watch, ref } from 'vue';
	export default defineComponent({
		props:{
			effect: {
				type: Number,
				default: 0
			},
			content: {
				type: String,
				default: ''
			},
			position: {
				type: String,
				default: 'top'
			},
			icons: {
				type: String,
				default: ''
			}
		},
		setup(props,context) {
			const state = reactive({
				icon: '\\ue' + props.icon.substring(4,7)
			})
			
		}
	})
</script>

<style lang="scss" scoped>
</style>
