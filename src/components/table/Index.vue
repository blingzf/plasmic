<!--
 * @Description: 人员管理页面
 * @Autor: ZF
 * @Date: 2021-09-06
 * @LastEditors: ZF
 * @LastEditTime: 2021-09-09
--> 
<template>
	<div>
		<div class="whole">
			<div class="search">
				<slot name="search"></slot>
			</div>
			<div class="table">
				<slot name="table"></slot>
			</div>
			<div class="page">
				<slot name="page"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default{
	setup(){

	}
}
</script>

<style lang="scss" scoped="scoped">
	.whole{
		width: calc(100% - 40px );
		height: calc(100% - 20px );
		padding: 10px 20px;
		// background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	.search{
		height: 50px;
	}
	.table{
		height: calc(100% - 87px);
	}
	.page{
		height: 32px;
	}
</style>
