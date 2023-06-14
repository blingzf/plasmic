<!--
 * @Description:
 * @Autor: zf
 * @Date: 2021-07-30 
 * @LastEditors: zf
 * @LastEditTime: 2021-07-30 
-->
<template>
	<el-tooltip
		effect="dark"
		:content="time"
		placement="top-start"
	>
		<div class="line1">
			{{time}}
		</div>
	</el-tooltip>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from 'vue';
	import { date } from './date';
	export default defineComponent ({
		props:{
			time:{
				type: Number,
				default: 0
			},
			type:{
				type: Number,
				default: 0
			}
		},
		setup(props){
			const state = reactive({
				time: ''
			})
			state.time = date(props.time,props.type);
			return {
				...toRefs(state)
			}
		}
	})
</script>

<style scoped>
	
</style>
