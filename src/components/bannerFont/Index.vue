<!--
 * @Description: banner图标题组件
 * @Autor: ZF
 * @Date: 2022-02-25
 * @LastEditors: ZF
 * @LastEditTime: 2022-04-12
--> 
<template>
	<div class="font-box" :style="'color:' + data.color">
		<a>{{data.top}}</a>
		<div>{{data.main}}<span :style="data.supply == undefined?'':'color:'+ data.supply.color +' ;'">{{data.supply == undefined?'':data.supply.value}}</span>{{data.supply == undefined?'':'。'}}</div>
		<span>{{data.foot}}</span>
		<span>{{data.bottom}}</span>
		<slot name="btn"></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent ({
	props:{
		data: {
			type: Object,
			default: () => {}
		}
	},
	setup(props,context) {
		const state = reactive({

		});
		return {
			...toRefs(state),
		}
	}
})
</script>

<style lang="scss" scoped="scoped">
	.font-box{
		color: #000000;
		span{
			font-family: 'AlibabaPuHuiTi';
			font-weight: normal;
			font-size: 16px;
			display: block;
			opacity: 0.72;
		}
		a{
			font-family: 'Montserrat';
			font-weight: 500;
			font-size: 40px;
		}
		div{
			font-family: 'AlibabaPuHuiTi';
			font-weight: 800;
			font-size: 48px;
			margin: 8px 0 20px 0;
			display: flex;
			span{
				font-family: 'AlibabaPuHuiTi';
				font-weight: 800;
				font-size: 48px;
			}
		}
	}
</style>
