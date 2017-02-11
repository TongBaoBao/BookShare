import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

Vue.use(Router)

export default new Router({
	routes: [
	{ path: '/home', component: Hello },
	{ path: '/booklist', component: Hello },
	{ path: '/register', component: Hello },
	{ path: '/login', component:  Hello }
	]
})
