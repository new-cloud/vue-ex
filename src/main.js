import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api';

// 静态资源
// import './styles/global/index.scss';

Vue.config.productionTip = false;

Vue.prototype.$api = api;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
