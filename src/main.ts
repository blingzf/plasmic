/*
 * @Description:
 * @Autor: zf
 * @Date: 2021-05-25 
 * @LastEditors: zf
 * @LastEditTime: 2021-09-15 
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/dist/index.css'
import '@/permission';
// import { checkRead } from '@/utils/readPrivs';
import { default as SvgIcon } from '@/components/svgIcon/Index.vue';
const app = createApp(App);
// app.config.globalProperties.$checkRead = checkRead ;
// app.use(store).use(router).mount('#app');
app.use(store).use(router).use(ElementPlus,{ locale }).component('svg-icon', SvgIcon).mount('#app');
// const req = require.context('./assets/icons/svg', false, /\.svg$/)
// const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
// requireAll(req)