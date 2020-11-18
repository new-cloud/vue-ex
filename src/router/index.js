import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ex from '../views/ex.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/ex',
		name: 'ex',
		component: ex
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
