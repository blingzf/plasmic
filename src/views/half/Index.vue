<!--
 * @Description: 新品发布万元福利页
 * @Autor: ZF
 * @Date: 2023-05-11 
 * @LastEditors: ZF
 * @LastEditTime: 2023-05-11 
-->
<template>
	<div class="whole" :style="{overflowY: active == 6?'auto':'hidden',backgroundImage: 'url('+wholeBack+')'}">
		<div v-if="active <= 0"  class="asset">
			<div class="asset-one"></div>
			<div class="asset-two"></div>
		</div>
		<div v-if="active > 0" class="top" :style="{width: '81.86vw',height: '18vw',right: '9vw',top: '6.4vw'}"></div>
		<div v-else :style="{position:'absolute',width: windowX+'px',height: windowX*110/375 + 'px',right: '0px',top: '0px',backgroundImage: 'url('+wholeTop+')',backgroundSize:'cover'}"></div>
		<div
			class="backCart"
			:style="{backgroundImage: item.srcBack == undefined ?'':'url('+item.srcBack+')',width: '100vw',height: '161vw',left: active == index?0:-windowX+'px'}"
			v-for="(item,index) in list"
		></div>
		<div class="video" :style="{height: 453*windowX/375 + 'px',width: active == 0?'185vw':'174.4vw',right: active == 0?'3.7vw':'3.2vw'}">
			<div v-if="active > 0" class="side-top"></div>
			<div v-if="active > 0" class="side-right"></div>
			<div v-if="active > 0" class="side-bottom"></div>
			<video 
				v-if="active>0&&!down"
				@click="play"
				:style="{opacity: isPlay?1:1}"
				id="video"
				class="mp4"
				x5-video-player-type="h5-page" 
				webkit-playsinline="true" 
				x-webkit-airplay 
				playsinline="true" 
				x5-playsinline="true" 
				x5-video-orientation="portraint" 
				:src="videoUrl"></video>
			<div 
				class="box flexCC"
				:style="{transform: 'perspective(140.2vw) rotateY('+item.deg+'deg) translateX(50%)',
				zIndex: item.index,width: active == 0?'92.5vw':'87.2vw',
				right: active == 0?'46.25vw':'43.6vw'}" 
				v-for="(item,index) in list">
				<div class="box-back" :style="{zIndex: item.mask?10:1}" ></div>
				<div 
					class="box-img"
					@touchstart="setAction"
					@touchmove="changeAction"
					@touchend="getAction"
				  :style="{backgroundImage: 'url('+item.src+')',backgroundSize: 'cover',backgroundColor: '#ffffff'}"></div>
			</div>
			<div class="pointer" :style="{height: 17*windowX/375 + 'px'}"></div>
		</div>
		<div 
			class="end" 
			@click="toInfo" 
			:style="{ width: '47.2vw',height:'15.3vw',right: active == 6?'26.4vw':0,bottom: active == 6 ?'17vw': '0.3vw',display:active == 0 ||active == 6?'none':'block' }"></div>

		<img src="https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/168388839567420230512Page.png" :style="{width: '100vw',marginTop: active == 6?'84vh':'100vh',height: windowX*1839/375 + 'px',transition:'1s'}" />
	</div>
</template>
<script lang="ts">
	import { reactive, toRefs, onMounted, ref, watch, computed } from 'vue';
	import { default as SvgIcon } from '@/components/svgIcon/Index.vue';
	import { ElMessage } from 'element-plus';
	let time:any;
	let timer:any;
	export default {
		components: { SvgIcon },
		setup(props:any,context:any) {
			const state = reactive({
				windowX: 0,
				x:0,
				between:0,
				down: false,
				classObj: {
					green: {
						url: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684116257526both-green.png',
						back: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684114582167green-back.png',
						top: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684116559773green-top.png'
					},
					grey:{
						url: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1683798661439both-sliver.png',
						back: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684118542437BG.png',
						top: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684116544794grey-top.png'
					},
					baseTop: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/168388543750520230512top.png',
				} as any,
				list:[
					{
						name: 'page1',
						deg:360,
						type:true,
						index:1,
						src:'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1683798661439both-sliver.png',
						mask:false,
						video: ''
					},
					{
						name: 'page3',
						deg:360,
						type:true,
						index:2,
						src:'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684128718754book-cont-1.png',
						mask:false,
						srcBack: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/16841197914992023051501.png',
						video: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/h5/video/Nano/开箱.MOV'
					},
					{
						name: 'page5',
						deg:360,
						type:true,
						index:3,
						src:'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684128739889book-cont-2.png',
						mask:false,
						srcBack: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/16841220833812023051502.png',
						video: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/h5/video/Nano/续航.mp4'
					},
					{
						name: 'page7',
						deg:360,
						type:true,
						index:4,
						src:'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684128756787book-cont-3.png',
						mask:false,
						srcBack: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/16841220696512023051503.png',
						video: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/h5/video/Nano/连接稳定性测试.mp4'
					},
					{
						name: 'page9',
						deg:360,
						type:true,
						index:5,
						src:'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684128773780book-cont-4.png',
						mask:false,
						srcBack: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/16841220554622023051504.png',
						video: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/h5/video/Nano/闪录.mp4'
					},
					{
						name: 'page11',
						deg:360,
						type:true,
						index:6,
						src:'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684128790569book-cont-5.png',
						mask:false,
						srcBack: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/16841199446962023051505.png',
						video: ''
					},
					{
						name: 'page13',
						deg:360,
						type:true,
						index:7,
						src:'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684128809569book-cont-6.png',
						mask:false,
						video: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/h5/video/Nano/主动降噪替换视频.mp4',
					},
				],
				active: 0,
				next: false,
				wholeBack: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684118542437BG.png',
				wholeTop: 'https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684116544794grey-top.png',
				className: 'green',
				isPlay: false,
				videoUrl: ''
			});
			onMounted(() => {
				watchWindow();
				setList();
				chooseClass();
			});
			const play = () => {
				let v = document.getElementById('video') as HTMLAudioElement;
				v.src = state.list[state.active].video;
				if(state.isPlay){
					v.pause();
				}else{
					// v.requestFullscreen();
					v.play();
				}
				if(state.active == 5){
					state.isPlay = false;
				}else{
					state.isPlay = !state.isPlay;
				}
				
			};
			// 选择类型
			const chooseClass = () => {
				setInterval(()=>{
					if(state.active <= 0){
						state.wholeTop = state.classObj[state.className].top;
						state.wholeBack = state.classObj[state.className].back;
						state.list[0].src = state.classObj[state.className].url;
						state.className = state.className == 'green'?'grey':'green';
					}else{
						state.wholeTop = state.classObj.baseTop;
					}
				},5000)
			};
			// 最后一页查看活动信息
			const toInfo = () => {
			    state.active = 6;
					state.list = state.list.map((item:any,index:number) => {
						if(state.active > index ){
							item.deg = 180
							item.mask = true;
							item.index = index;
						};
						return item;
					});
			};
			// 翻页事件
			const changeAction = (e:any) => {
				console.log(12333334,state.active)
				if(state.down){
					let bet = state.x - e.changedTouches[0].clientX;
					let area = state.windowX;
					let deg = 180*bet/area;
					// >0 next    <0 back
					if(bet > 0 &&state.active < state.list.length -1&&state.active>0){
						state.list = state.list.map((item:any,index:number) => {
							if(state.active == index){
								item.deg = 360 - deg;
								if(Math.abs(deg) >= 90){
									item.mask = true;
									item.index = index;
								}else{
									item.mask = false;
									item.index = state.list.length - index;
								}
							};
							return item;
						});
					}else if(bet < 0&&state.active > 1){
						console.log(1233333,state.active)
						state.list = state.list.map((item:any,index:number) => {
							if(state.active == index+1 ){
								item.deg = 180 - deg;
								if(Math.abs(deg) >= 90){
									item.mask = false;
									item.index = state.list.length - index;
								}else{
									item.mask = true;
									item.index = index;
								}
							};
							return item;
						});
					}
				}
			};
			const setAction = (e:any) => {
				state.isPlay = false;
				state.x = e.changedTouches[0].clientX;
				state.down = true;
			};
			const getAction = (e:any) => {
				let between = state.x - e.changedTouches[0].clientX;
				let area = state.windowX*0.5;
				// >0 next    <0 back
				if(between>0){
					if(Math.abs(between)>area){
						if(state.active<state.list.length-1){
							state.list = state.list.map((item:any,index:number) => {
								if(state.active == index){
									item.deg = 180;
								};
								return item;
							});
							state.active += 1;
						}
					}else if(Math.abs(between)<area){
						state.list = state.list.map((item:any,index:number) => {
							if(state.active == index){
								item.deg = 360;
							};
							return item;
						});
					}
				}else if(between<0){
					if(Math.abs(between)>area){
						if(state.active>0){
							state.list = state.list.map((item:any,index:number) => {
								if(state.active-1 == index){
									item.deg = 360;
								};
								return item;
							});
							state.active = state.active - 1;
						}
					}else if(Math.abs(between)<area){
						state.list = state.list.map((item:any,index:number) => {
							if(state.active-1 == index){
								item.deg = 180;
							};
							return item;
						});
					}
				}
				state.down = false;
				// console.log(state.list)
			};
			// 设置层叠属性
			const setList = () => {
				state.list = state.list.map((item:any,index:number)=>{
					item.index = state.list.length - index;
					return item;
				});
				console.log(state.list)
			};
			// 窗口变化对应更改windowX事件
			const watchWindow = () => {
				state.windowX = window.innerWidth;
				window.onresize = () => {
					state.windowX = window.innerWidth;
				}
			};
			// 翻页
			const action = (i:number) => {
				if(i == state.list.length-1 ){
					return false;
				}
				if(state.next){
					return false;
				}else{
					state.active = i+1;
					state.next = true;
					state.list = state.list.map((item:any,index:number) => {
						if(i == index){
							if(item.type){
								item.deg = 180;
								// item.index = index;
								item.type = false;
							}else{
								item.deg = 360;
								// item.index = state.list.length - index;
								item.type = true;
							}
						};
						return item;
					});
					setTimeout(() =>{
						state.list = state.list.map((item:any,index:number) => {
							if(i == index){
								if(item.type){
									item.mask = !item.type;
									item.index = state.list.length - index;
									if(index == 0){
										state.active = 0;
									}
								}else{
									item.mask = !item.type;
									item.index = index;
								}
							};
							return item;
						});
						state.next = false;
					},800);
				}
			};
			return {
				...toRefs(state),
				action,
				setAction,
				getAction,
				changeAction,
				toInfo,
				play
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.whole{
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		background-color: #090e15;
		display: flex;
		justify-content: center;
		background-size: cover;
		img{
			margin-top: -5px;
		}
		line-height: 0;
	}
	.video{
		position: absolute;
		width: 100vw;
		top: 29.3vw;
	}
	.pointer{
		background-image: url('https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1683854899659pointer.png');
		background-size: cover;
		width: 39.2vw;
		position: absolute;
		bottom: 2%;
		right: 5.8vw;
		z-index: 10;
		animation-name:pointerAnimation;
		animation-timing-function:cubic-bezier(1,1,1,1);
		animation-duration:4s;
		animation-delay:0s;
		animation-iteration-count: infinite;
	}
	@keyframes pointerAnimation{
		0% {opacity: 0;}
		25% {opacity: 1;}
		50% {opacity: 0;}
		75% {opacity: 1;}
		100% {opacity: 0;}
	}
	.asset{
		width: 68px;
		padding: 4px;
		height: 4px;
		background: rgba(0, 0, 0, 0.6);
		border-radius: 32px;
		position: fixed;
		bottom: 20px;
		left: 3.2vw;
		display: flex;
		justify-content: space-between;
		&-one{
			border-radius: 4px;
			height: 4px;
			background-color: #ffffff;
			animation-name:assetAnimation;
			animation-timing-function:cubic-bezier(1,1,1,1);
			animation-duration:10s;
			animation-delay:0s;
			animation-iteration-count: infinite;
			width: 4px;
		}
		&-two{
			border-radius: 4px;
			height: 4px;
			background-color: #ffffff;
			animation-name:assetsAnimation;
			animation-timing-function:cubic-bezier(1,1,1,1);
			animation-duration:10s;
			animation-delay:0s;
			animation-iteration-count: infinite;
			width: 56px;
		}
	}
	@keyframes assetAnimation{
		0% {width: 4px;}
		50% {width: 56px;}
		100% {width: 4px;}
	}
	@keyframes assetsAnimation{
		0% {width: 56px;}
		50% {width: 4px;}
		100% {width: 56px;}
	}
	.side{
		&-top{
			background-image: url('https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684122582687book-side-top.png');
			background-size: cover;
			width: 87.2vw;
			height: 4px;
			right: 0px;
			position: absolute;
			top: -4px;
		}
		&-right{
			background-image: url('https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684122606660book-side-right.png');
			background-size: cover;
			width: 6px;
			height: 100%;
			position: absolute;
			right: -6px;
			top: 0;
		}
		&-bottom{
			background-image: url('https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/1684122628783book-side-bottom.png');
			background-size: cover;
			width: 87.2vw;
			position: absolute;
			height: 4px;
			bottom: -4px;
			right: 0px;
			
		}
	}
	.end{
		background-image: url('https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/168388153254020230512end.png');
		background-size: cover;
		position: absolute;
	}
	.top{
		background-image: url('https://iflybuds.oss-cn-hangzhou.aliyuncs.com/files/image/168388543750520230512top.png');
		background-size: cover;
		position: absolute;
	}
	.backCart{
		background-size: cover;
		bottom: 0px;
		position: absolute;
		transition: 1s;
	}
	.bancCartWall{
		background-size: cover;
		display: flex;
		height: 100%;
		bottom: 0px;
		position: absolute;
		transition: 1s;
	}
	.box{      
		font-size: 20px;           
		height: 100%;
		position: absolute;           
		color: #ffffff;
		cursor: pointer;
		// transition: transform 1s;
		transition-timing-function: cubic-bezier(0.81, 0.26, 0.81, 0.26);
		overflow: hidden;
		&-img{
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 2;
			top: 0;
			left: 0;
		}
		&-back{
			border-left: #000000 1px solid;
			height: 100%;
			width: calc(100% - 1px);
			position: absolute;
			z-index: 1;
			background: linear-gradient(90deg, #EFEFEF 0%, #D9D9D9 22.6%, rgba(255, 255, 255, 0) 86.79%);
			top: 0;
			left: 0;
		}
	}
	.book{
		width: 200px;
		height: 300px;
		position: absolute;
		color: #000000;
		font-size: 21px;
		line-height: 1;
		&-item{
			width: 200px;
			height: 300px;
		}
		&-one{
			backface-visibility: hidden;
			transition: transform 3s;
			transition-timing-function: cubic-bezier(0.03, -0.74, 1, 0.99);
			cursor: pointer;
		}
		&-two{
			position: absolute;
			background-color: #ffffff;
			right: 0px;
			top: 0px;
			backface-visibility: hidden;
			z-index: 1;
		}
		&-three{
			position: absolute;
			background-color: #ffffff;
			top: 0px;
			transform: rotate3d(0, 1, 0, 180deg);
			right: 0px;
		}
	}
	.mp4{
		position: absolute;
		width: 66.13vw;
		height: 31%;
		z-index: 1000;
		top: 33.1%;
		right: 12.8vw;
	}
</style>