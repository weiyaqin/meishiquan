// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Config from './config/config.js'
import apiConfig from './config-api'
import tool from './libs/tool'

tool(Vue)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const router = new VueRouter({
  routes:Config 
}) 
// Vue.__$ = _$;
Vue.__Basepath = 'http://localhost:3066' //服务器
Vue.__HttpMethod = 'JSONP';
Vue.__Developing = true; //是否开发中，如果否，则发布时则强制卸载mock
Vue.http.options.emulateJSON = true;
Vue.apiConfig = apiConfig

const app = new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	router
})
