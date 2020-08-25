/*
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-03-27 19:40:49
 * @LastEditors  : Pat
 * @LastEditTime : 2020-08-06 10:15:39
 */
const { moduleName } = require('./init/amb')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./config/store"
import "./router/permission"
import *  as API from '../src/api/index.js'
Vue.prototype.$API = API
Vue.config.productionTip = false
document.title = moduleName
//element-ui的css
import 'element-ui/lib/theme-chalk/index.css'
new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
