<!--
 * @Description: 自定义img标签  Web Components
 * @Autor: ZF 
 * @Date: 2021-09-14
 * @LastEditors: ZF
 * @LastEditTime: 2021-09-14
 *  
 import { default as AuthImg } from '../../../components/authImg/Index.vue'; 
 export default{
 	 components:{
 		 AuthImg
	 }
 }
 <auth-img class="css类选择器" style="样式属性" :src="图片地址"></auth-img>
--> 
<template>
	<auth-img :src="src" :style="style" :class="class" />
</template>

<script>
	import { onBeforeMount, toRefs, reactive, watch } from 'vue';
	let requestImage = function (url, element) {
	    let request = new XMLHttpRequest();
	    request.responseType = 'blob';
	    request.open('get', url, true);
			const arr = document.cookie.split(';')
			let token = ''
			for(const i in arr){
				if(arr[i].split('=')[0].trim() === 'token'){
					token = arr[i].split('=')[1].trim()
				}
			}
	    request.setRequestHeader('token', token);
	    request.onreadystatechange = e => {
	        if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
	            if (request.response.type == 'image/jpeg' || request.response.type == 'image/png' || request.response.type == 'image/jpg') {
	                element.src = URL.createObjectURL(request.response);
	                element.style.display = "block";
	                // element.part = "native";
	                element.onload = () => {
	                    URL.revokeObjectURL(element.src);
	                }
	            } else {
	                element.src = "https://z3.ax1x.com/2021/09/08/h7LuxP.png";
	                // element.style.display = "none";
	            }
	        } else {
	            element.src = "https://z3.ax1x.com/2021/09/08/h7LuxP.png";
	            // element.style.display = "none";
	        }
	    };
	    request.send(null);
	};
	class AuthImg extends HTMLElement {
	    constructor() {
	        super();
	        this.img = new Image();
					const shadow = this.attachShadow({ mode: 'open' });
					this.img.setAttribute("style", 'width: 100%;height: 100%;')
					shadow.appendChild(this.img);
	    }
	    // 监听属性修改
	    static get observedAttributes() { return ['src', 'style', 'class']; }
	    // 生命周期钩子函数
	    connectedCallback() {
				requestImage(this.getAttribute('src'), this.img);
				if (this.getAttribute("style")) {
						this.img.setAttribute("style", this.getAttribute("style"));
				}
				if (this.getAttribute("class")) {
						this.img.className = this.getAttribute("class");
				}
	    }
	    attributeChangedCallback(name, oldValue, newValue) {
				if (name == 'src' && (oldValue !== null && newValue !== oldValue)) {
						requestImage(this.getAttribute('src'), this.img);
				} else if (name == 'style') {
						this.img.setAttribute("style", this.getAttribute("style"));
				} else if (name == 'class') {
						this.img.setAttribute("class",this.getAttribute("class"));
				}
	    }
	    disconnectedCallback() {    
	        this.img.src = '';
	    }
	}
	window.customElements.define('auth-img', AuthImg); // 定义自定义标签名称
	export default {
		props:{
			src: {
				type: String,
				default: 'http://127.0.0.1:8080/blingzf/zf/files/eedf6bf3f2e6e36416d00dec7177b732.png'
			},
			style: {
				type: Object,
				default: {}
			},
			class: {
				type: String,
				default: ''
			}
		},
		setup(props) {

		}
	}
</script>

<style>
</style>
