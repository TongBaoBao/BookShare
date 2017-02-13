import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'components/Home'
import Register from 'components/Register'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
	routes: [
	{ path: '/', component: Home },
	{ path: '/booklist', component: Hello },
	{ path: '/register', component: Register },
	{ path: '/login', component:  Login }
	]
})
