<!--
 * @Description: 移动块
 * @Autor: ZF
 * @Date: 2021-10-20
 * @LastEditors: ZF
 * @LastEditTime: 2021-10-20
--> 
<template>
	<div class="move-box" 
	  :style="`left:${left}px;
						top:${top}px;
						width:${width}px;
						height:${height}px;
						background-color:${TitleBackgroundColor}`"
	  @mousedown="down" 
	  @mouseup="up"
		v-if="moveShow">
		<div class="move-top" :style="`background-color:${TitleBackgroundColor}`">
			<div class="move-title">{{title}}</div>
			<el-tooltip
				class="item"
				effect="dark"
				content="关闭"
				placement="top"
			>
				<i class="iconfont close" @click="close">&#xe67a;</i>
			</el-tooltip>
		</div>
		<div class="move-view" @mousedown.stop="">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent ({
	props:{
		width: {
			type: Number,
			default: 0
		},
		height: {
			type: Number,
			default: 0
		},
		TitleBackgroundColor: {
			type: String,
			default: "#3cc2d8"
		},
		moveShow: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: "提示"
		}
	},
	setup(props,context) {
		const state = reactive({
			left: (window.innerWidth-props.width)/2,
			top: (window.innerHeight-props.height)/2,
			layerX: 0,
			layerY: 0
		});
		// 移动窗口事件
		function move() {
			const e:any = window.event;
			state.left = e.clientX-state.layerX;
			state.top = e.clientY-state.layerY;
		};
		const down = (e:any) => {
			state.layerX = e.layerX;
			state.layerY = e.layerY;
			window.addEventListener('mousemove',move)
		};
		const up = () => {
			window.removeEventListener('mousemove',move)
		};
		const close = () => {
			context.emit('close')
		};
		return {
			...toRefs(state),
			down,
			up,
			close
		}
	}
})
</script>

<style lang="scss" scoped="scoped">
	@font-face {
	  font-family: 'iconfont';  /* Project id 2618052 */
	  src: url('//at.alicdn.com/t/font_2618052_dvu3mgd4ise.woff2?t=1634794945316') format('woff2'),
	       url('//at.alicdn.com/t/font_2618052_dvu3mgd4ise.woff?t=1634794945316') format('woff'),
	       url('//at.alicdn.com/t/font_2618052_dvu3mgd4ise.ttf?t=1634794945316') format('truetype');
	}
	.iconfont{
		font-family:"iconfont" !important;
		font-size:16px;font-style:normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	.move-box {
		position: fixed;
		z-index:100;
		box-shadow: 0 0 2px 2px #e9e9e9;
		border-radius: 10px;
	}
	.move-top {
		height: 40px;
		border-radius: 10px 10px 0 0;
		position: relative;
	}
	.move-view {
		padding: 20px;
		margin: 2px;
		width: calc(100% - 44px);
		height: calc(100% - 84px);
		background-color: #ffffff;
		border-radius: 0 0 10px 10px;
	}
	.close {
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 20px;
		color: aliceblue;
	}
	.close:hover {
		color: #e91e63;
		cursor: pointer;
	}
	.move-title {
		height: 40px;
		line-height: 2;
		margin-left: 10px;
		color: #ffffff;
		font-size: 20px;
	}
</style>
