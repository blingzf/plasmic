<!--
 * @Description:
 * @Autor: zf
 * @Date: 2021-07-30 
 * @LastEditors: zf
 * @LastEditTime: 2021-07-30 
-->
<template>
	<el-row >
		<el-table
				:data="tableData"
				height="450"
				border>
				<slot></slot>
		</el-table>
	</el-row> 
	<el-row>
		 <div class="block">
		    <el-pagination
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="10"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
			</div>
	</el-row>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { Response } from '@/utils/response';
	import { ElMessageBox } from 'element-plus';
	import { ElMessage } from 'element-plus';
	export default defineComponent ({
		props:{
			tableData:{
				type: Array,
				default: []
			}
		},
		data(){
			return {
				
			}
		}
	})
</script>

<style>
</style>
