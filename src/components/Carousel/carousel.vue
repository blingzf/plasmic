<!--
 * @Description:
 * @Autor: ZF
 * @Date: 2021-06-11
 * @LastEditors: ZF
 * @LastEditTime: 2021-06-11
--> 
<template>
	<div class="box" name="1233">
		<div name='carousel' class="carousel " :style="{width:boxWidth+ 'px',left:moveX+'px'}" 
		@mousedown="gtouchstart" @mouseup="gtouchend" @mousemove="gtouchmove" 
		@touchstart.stop.prevent='gtouchstart' @touchmove="gtouchmove"   @touchend="gtouchend">
			<div :style="{width:itemWidth+ 'px',backgroundImage:item.img,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',color:'#ffffff'}"
			 class="content" @click="toRouter(item.router)"
			  @mousedown="getItem(index,item.router)" @touchstart="getItem(index,item.router)" 
			  v-for="(item,index) in arrs" :key="item">{{item.name}}</div>
		</div>
		<div class="foot">
			<div :class="pointIndex == index ?'foot-choose':'foot-unchoose'" 
			:style="pointIndex == index ? 'background-color:'+ pointColor:'background-color: rgba(255, 255, 255, 0.3)'" 
			v-for="(item,index) in arrs.length-2" :key="index" @click="toPoint(index)"></div>
		</div>
	</div>
</template>

<script> 
	let timer = null;
	let times = null;
	/**  
	 * banner轮播图组件  
	 * @description banner轮播图组件  
	 * @tutorial http://www.baidu.com  
	 * @property {Array} arrs 轮播图地址数据
	 * @property {Number} loopr 轮播图间隔时间：默认5000  单位（毫秒）  
	 * @property {String} pointColor 指示点的颜色：默认rgba(255, 255, 255, 1)
	 * @property {Number} marginWidth 父组件外边距2倍只能移动端使用
	 * @event {Function} close 关闭事件  
	 * @example <carousel :total="50" @close=""></carousel>  
	 */ 
	export default {
		name:"carousel",
		props: {
			arrs: {
				type: Array,
				default: () => []
			},
			loopr: {
				type: Number,
				default: 5000
			},
			pointColor: {
				type: String,
				default: 'rgba(255, 255, 255, 1)'
			},
			marginWidth: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				windowX: '',      // 窗口宽
				boxWidth: '',     // 容器宽
				itemWidth: '',    // 容器中dom宽
				down: false,      // 是否鼠标按下
				downX: 0,         // 鼠标按下位置
				moveX: 0,		  // 容器移动距离
				currentIndex: 1,  // 当前容器展示的索引
				pointIndex: 0,    // 属性点的索引
				port: true,		  // 是否是PC端
				action: false,    // 是否点击跳转
				routerPath:''     // 移动端路由媒介
			}
		},
		// 监听窗口大小的变化
		watch: {
			windowX(newQuestion, oldQuestion) {
				this.remake()
			}
		},
		mounted() {
			this.isMobile();
			this.moveX = -this.currentIndex * this.windowX;
			this.doSetInterval();
			this.windowVisible();
			this.watchWindow();
		},
		methods: {
			// 清除定时器
			doClearInterval() {
				clearInterval(times)
				clearInterval(timer)
				times = null
				timer = null
			},
			// 执行定时器
			doSetInterval() {
				timer = setInterval(() => {
					let x = this.windowX;
					let i = 0;
					times = setInterval(() => {
						i++;
						this.moveX -= x / 100;
						if (i > 99) {
							this.currentIndex += 1;
							this.pointIndex += 1;
							clearInterval(times);
							times = null;
						}
					}, 1)
					if (this.currentIndex == this.arrs.length - 2) {
						this.currentIndex = 0;
						this.pointIndex = -1;
						this.moveX = -this.currentIndex * this.windowX;
					}
				}, this.loopr)
			},
			// 监听页面是否被使用
			windowVisible() {
				const that = this
				  document.addEventListener("visibilitychange", function() {
					if (document.hidden === true) {
						// 页面被挂起
						that.doClearInterval()
					} else {
						// 页面由挂起被激活
						that.doSetInterval()
					}
				  });
			},
			// 窗口变化对应更改windowX事件
			watchWindow() {
				window.onresize = () => {
					if (this.windowX != window.innerWidth) {
						if(this.port){
							this.windowX = window.innerWidth
						}else{
							this.windowX = window.innerWidth - this.marginWidth;
						}
					}
				}
			},
			// watch后执行重新赋值
			remake() {
				this.boxWidth = this.arrs.length * this.windowX;
				this.itemWidth = 1 / this.arrs.length * this.boxWidth;
				this.moveX = -this.currentIndex * this.windowX;
			},
			// 对应双端的拖动判断开始事件
			gtouchstart(e) {
				if (this.port) {
					// PC端
					this.downX = e.x;
				} else {
					// 移动端
					this.downX = e.changedTouches[0].clientX;
				}
				this.down = true;
				this.doClearInterval()
			},
			// 对应双端拖动进行中事件
			gtouchmove(e) {
				let x = e.view.innerWidth;
				const index = this.currentIndex;
				if (this.port && this.down) {
					// PC端且鼠标按下
					this.moveX = e.x - this.downX - x * index;
				} else {
					if (this.down) {
						// 移动端且手指按下
						x = e.view.innerWidth - this.marginWidth;
						this.moveX = e.changedTouches[0].clientX - this.downX - x * index;
					}
				}
			},
			// 对应双端拖动结束事件
			gtouchend(e) {
				let movex = 0;
				let x = 0;
				if (this.port) {
					// PC端
					movex = e.x - this.downX;
					x= e.view.innerWidth
				} else {
					// 移动端
					movex = e.changedTouches[0].clientX - this.downX;
					x= e.view.innerWidth - this.marginWidth;
				}
				if(Math.abs(movex) == 0){
					this.action = true;
					if(!this.port){
						this.toRouter(this.routerPath) 
					}
				}  
				if (x / 2 < Math.abs(movex)) {
					if (movex < 0) {
						if (this.currentIndex == this.arrs.length - 2) {
							this.moveX = -x;
							this.pointIndex = 0;
							this.currentIndex = 1;
						} else {
							this.moveX = -(this.currentIndex + 1) * x;
							this.pointIndex = this.currentIndex;
							this.currentIndex++;
						}
					}
					if (movex > 0) {
						if (this.currentIndex == 1) {
							this.moveX = -(this.arrs.length - 2) * x;
							this.pointIndex = this.arrs.length - 2;
							this.currentIndex = this.arrs.length - 1;
						} else {
							this.moveX = -(this.currentIndex - 1) * x;
							this.pointIndex = this.currentIndex - 2;
							this.currentIndex--;
						}
					}
				} else {
					this.moveX = -this.currentIndex * x;
					this.pointIndex = this.currentIndex - 1
				}
				this.downX = '';
				this.down = false;
				this.doSetInterval()
			},
			// 获得当前容器索引
			getItem(index,path) {
				this.routerPath = path;
				this.currentIndex = index;
			},
			// 点击展示点跳转对应容器索引展示
			toPoint(index) {
				this.moveX = -this.windowX * (index + 1);
				this.pointIndex = index;
			},
			// 判断双端方法
			isMobile() {
				const flag = navigator.userAgent.match(
					/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
				);
				if (flag === null) {
					console.log("pc端");
					this.port = true;
					this.windowX = window.innerWidth 
					this.boxWidth = this.arrs.length * this.windowX;
					this.itemWidth = 1 / this.arrs.length * this.boxWidth;
				} else {
					console.log("移动端");
					this.port = false;
					this.windowX = window.innerWidth - this.marginWidth
					this.boxWidth = this.arrs.length * this.windowX;
					this.itemWidth = 1 / this.arrs.length * this.boxWidth;
				}

			},
			// 路由跳转事件
			toRouter(path) {
				if(this.action){
					this.action = false;
					this.$router.replace({path})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		z-index: 10;
	}

	.carousel {
		position: absolute;
		z-index: 1;
		height: 100%;
		display: flex;
		flex-direction: row;

		div {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.foot {
		position: absolute;
		width: 100%;
		height: 6px;
		z-index: 2;
		display: flex;
		bottom: 5%;
		justify-content: center;

		&-unchoose {
			width: 6px;
			height: 6px;
			margin: 0 2px;
			background-color: rgba(255, 255, 255, 0.3);
			border-radius: 3px;
		}

		&-choose {
			width: 6px;
			height: 6px;
			margin: 0 2px;
			background-color: rgba(255, 255, 255, 1);
			border-radius: 3px;
		}
	}
</style>
