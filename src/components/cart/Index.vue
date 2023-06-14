<!--
 * @Description: banner图标题组件
 * @Autor: ZF
 * @Date: 2022-02-25
 * @LastEditors: ZF
 * @LastEditTime: 2022-04-15
--> 
<template>
	<div class="col" v-if="type == 'column'">
		<div class="col-img-cart">
			<router-link :to="data.path" @click="resetMain">
				<slot name="img"></slot>
			</router-link>
		</div>
		<div class="col-content" :style="'background-color:' + data.color">
			<span>{{data.title}}</span>
			<div>{{data.introduction}}</div>
			<router-link :to="data.path" @click="resetMain" :class="effect == 'light'?'btn-light':'btn-dark'">
				了解更多
				<i class="iconfont">&#xe600;</i>
			</router-link>
		</div>
	</div>
	<div class="row" v-if="type == 'row'">
		<div class="row-img-cart" :style="'background-color:' + data.backgroundColor">
			<slot name="img"></slot>
		</div>
		<div class="row-content" :style="'background-color:' + data.color">
			<span>{{data.title}}</span>
			<div>{{data.introduction}}</div>
			<router-link :to="data.path" @click="resetMain" :class="effect == 'light'?'btn-light':'btn-dark'">
				了解更多
				<i class="iconfont">&#xe600;</i>
			</router-link>
		</div>
	</div>
	<div :class="sort === 'asc'?'info':'info infos' " v-if="type == 'info'">
		<div class="info-img-cart" :style="'background-color:' + data.backgroundColor">
			<slot name="img"></slot>
		</div>
		<div class="info-content" :style="'background-color:' + data.color">
			<div class="info-content-top">
				<a>{{data.title}}</a>
				<span class="btn-light" style="margin: 0;">
					使用说明
					<i class="iconfont">&#xe600;</i>
				</span>
			</div>
			<div class="info-content-line"></div>
			<div class="info-content-bottom">
				<div class="info-content-bottom-left">
					<span v-for="item in data.list">
						• {{item.name}}
					</span>
				</div>
				<span class="btn-dark" style="margin: 0;">
					常见问题
					<i class="iconfont">&#xe600;</i>
				</span>
			</div>
		</div>
	</div>
	<div class="about" v-if="type == 'about'" :style="'color:' + data.color+';background-color:' + data.backGroundColor">
		<span>{{data.title}}</span>
		<svg-icon :icon="data.svg" class="about-svg"></svg-icon>
		<p>{{data.content}}</p>
		<div>{{data.en}}</div>
	</div>
</template>

<script lang="ts">
/**
 * data: 数据展示{ img, title, color, introduction }
 * effect: 按钮的效果展示-["light","dark"]
 * type: 展示方式["column","row"]
 * */	
	import { default as SvgIcon } from '@/components/svgIcon/Index.vue';
	import { defineComponent, reactive, toRefs } from 'vue';
	export default defineComponent ({
		components: { SvgIcon },
		props:{
			data: {
				type: Object,
				default: () => {}
			},
			type: {
				type: String,
				default: 'column'
			},
			effect: {
				type: String,
				default: 'light'
			},
			sort: {
				type: String,
				default: 'asc'
			}
		},
		setup(props,context) {
			const state = reactive({

			});
			const resetMain = () => {
				const dom = document.getElementById('main') as HTMLElement;
				dom.scrollTop = 0
			};
			return {
				...toRefs(state),
				resetMain
			}
		}
	})
</script>

<style lang="scss" scoped="scoped">
	.infos{
		flex-direction: row-reverse;
	}
	.btn-light{
		text-decoration: none;
		margin-top: 24px;
		display: flex;
		width: 136px;
		height: 50px;
		border-radius: 25px;
		background-color: #000000;
		color: #FFFFFF;
		font-size: 16px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		i{
			margin-left: 10px;
		}
	}
	.btn-light:hover{
		background-color: #ffffff;
		color:#000000
	}
	.btn-dark{
		margin-top: 24px;
		text-decoration: none;
		display: flex;
		font-weight: 400;
		width: 136px;
		height: 50px;
		border-radius: 25px;
		border: 1px solid #444444;
		color: #000000;
		font-size: 16px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		i{
			margin-left: 10px;
		}
	}
	.btn-dark:hover{
		background-color: #444444;
		color:#FFFFFF
	}
	.col {
		color: #000000;
		font-family: 'AlibabaPuHuiTi';
		font-weight: 400;
		&-img-cart{
			overflow: hidden;
		}
		&-img {
			width: 580px;
			height: 290px;
			margin-bottom: -5px;
		}
		&-img:hover {
			transform: scale(1.1);
		}
		&-content {
			span{
				font-weight: 600;
				font-size: 24px;
			}
			div{
				display: inline-block;
				margin-top: 8px;
				font-size: 16px;
				height: 44px;
				color: rgba(0, 0, 0, 0.8);
			}
		}
	}
	.row {
		color: #000000;
		display: flex;
		font-family: 'AlibabaPuHuiTi';
		font-weight: 400;
		&-img-cart{
			overflow: hidden;
		}
		&-img {
			width: 580px;
			height: 290px;
		}
		&-img:hover {
			transform: scale(1.1);
		}
		&-content {
			span{
				font-weight: 600;
				font-size: 24px;
				display: block;
			}
			div{
				display: inline-block;
				margin-top: 8px;
				font-size: 16px;
				color: rgba(0, 0, 0, 0.8);
			}
		}
	}
	.info {
		width: 1180px;
		color: #000000;
		height: 290px;
		display: flex;
		margin-bottom: 40px;
		font-family: 'AlibabaPuHuiTi';
		font-weight: 400;
		&-img {
			width: 580px;
			height: 290px;
		}
		&-img:hover {
			transform: scale(1.1);
		}
		&-content {
			padding: 40px 40px;
			width: 520px;
			height: 210px;
			&-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 24px;
				font-weight: 600;
				padding-bottom: 16px;
			}
			&-line{
				background: rgba(0, 0, 0, 0.12);
				width: 340px;
				height: 0.5px;
				margin-bottom: 22.5px;
			}
			&-bottom{
				display: flex;
				justify-content: space-between;
				&-left{
					display: flex;
					width: 376px;
					flex-wrap: wrap;
					justify-content: space-between;
					span{
						color: #222222;
						font-size: 14px;
						width: 168px;
						margin-bottom: 10px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;     // 省略的行数
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
	.about{
		display: flex;
		flex-direction: column;
		padding: 24px 24px 81px 24px;
		font-size: 20px;
		&-svg{
			margin-top: 64px;
			width: 52px;
			height: 52px;
		}
		p{
			margin: 15px 0;
			font-size: 28px;
		}
		div{
			font-size: 15px;
			width: 296px;
		}
	}

	@media screen and (max-width: 428px){
		.col{
			margin-bottom: 20px;
			width: 272px;
			&-content {
				transform: scale(0.8);
				margin: -23px -34px;
				padding: 24px;
				width: 292px;
				height: 176px;
			}
			&-img-cart {
				width: 272px;
				height: 160px;
			}
		}
		.row{
			width: 272px;
			display: flex;
			margin-bottom: 20px;
			flex-direction: column;
			&-content{
				padding: 24px;
				transform: scale(.8);
				height: 182px;
				margin: -30px -34px;
				width: 292px;
			}
			&-img-cart{
				width: 100%;
				height: 160px;
			}
		}
		.info {
			width: 256px;
			height: 651px;
			flex-direction: column;
			&-img-cart {
				overflow: hidden;
				width: 256px;
				height: 160px;
				display: flex;
				justify-content: center;
			}
			&-content {
				width: 208px;
				height: 443px;
				padding: 24px;
				&-top{
					flex-direction: column;
					align-items: unset;
					font-size: 22px;
					a{
						margin-bottom: 12px;
					}
				}
				&-line{
					width: 208px;
				}
				&-bottom{
					flex-direction: column;
					&-left{
						width: 256px;
						span{
							margin-bottom: 16px;
						}
					}
					div{
						margin-bottom: 16px;
					}
				}
			}
		}
	}
	@media screen and (min-width: 428px) and (max-width: 768px){
		.col{
			margin-bottom: 20px;
			width: 346px;
			&-content {
				margin: unset;
				transform: unset;
				padding: 24px;
				width: 340px;
				height: 176px;
			}
			&-img-cart {
				overflow: hidden;
				width: 388px;
				height: 214px;
			}
		}
		.row{
			margin-bottom: 20px;
			width: 388px;
			display: flex;
			flex-direction: column;
			&-content{
				padding: 24px;
				height: 168px;
				margin: unset;
				transform: unset;
				width: unset;
				
			}
			&-img-cart{
				width: 100%;
				height: 214px;
			}
		}
		.info {
			width: 388px;
			height: 525px;
			flex-direction: column;
			&-img-cart {
				overflow: hidden;
				width: 388px;
				height: 160px;
				display: flex;
				justify-content: center;
			}
			&-content {
				width: 340px;
				height: 317px;
				padding: 24px;
				&-top{
					flex-direction: column;
					align-items: unset;
					a{
						margin-bottom: 12px;
					}
				}
				&-bottom{
					flex-direction: column;
					div{
						margin-bottom: 16px;
					}
				}
			}
		}
	}
	@media screen and (min-width: 768px) and (max-width: 976px){
		.col{
			width: 346px;
			&-content {
				padding: 40px;
				width: 266px;
				height: 176px;
			}
			&-img-cart {
				overflow: hidden;
				width: 346px;
				height: 184px;
			}
		}
		.row{
			width: 712px;
			display: flex;
			flex-direction: column;
			&-content{
				padding: 24px;
				height: 152px;
			}
			&-img-cart{
				width: 100%;
				height: 290px;
				text-align: center;
			}
		}
		.info {
			width: 712px;
			height: 429px;
			flex-direction: column;
			&-img-cart {
				overflow: hidden;
				width: 712px;
				height: 240px;
				display: flex;
				justify-content: center;
			}
			&-content {
				height: 245px;
				width: 664px;
				padding: 32.5px 24px 24px 24px;
				&-top{
					flex-direction: row;
					align-items: center;
				}
				&-bottom{
					flex-direction: row;
					align-items: center;
				}
			}
		}
	}
	@media screen and (min-width: 976px) and (max-width: 1280px){
		.col{
			width: 433px;
			&-content {
				padding: 40px;
				width: 353px;
				height: 176px;
			}
			&-img-cart {
				overflow: hidden;
				width: 433px;
				height: 290px;
			}
		}
		.row{
			width: 886px;
			&-content{
				padding: 48px 40px;
				width: 226px;
				height: 194px;
			}
			&-img-cart{
				width: 580px;
				height: 290px;
			}
		}
		.info {
			width: 886px;
			height: 280px;
			flex-direction: row;
			&-img-cart {
				overflow: hidden;
				width: 306px;
				height: 280px;
				display: flex;
				justify-content: center;
			}
			&-content {
				height: 200px;
				padding: 40px;
				width: 520px;
			}
		}
	}
	@media screen and (min-width: 1280px){
		.col{
			width: 586px;
			&-content {
				span{
					display: block;
				}
				padding: 40px;
				width: 500px;
				height: 176px;
			}
			&-img-cart {
				overflow: hidden;
				width: 580px;
				height: 290px;
			}
		}
		.row{
			width: 1180px;
			&-img-cart{
				width: 580px;
				height: 290px;
			}
			&-content{
				padding: 68px 40px;
				width: 500px;
				height: 154px;
			}
		}
		.info {
			&-img-cart {
				overflow: hidden;
				width: 580px;
				height: 290px;
			}
			&-content{
				height: 210px;
			}
		}
	}
</style>
