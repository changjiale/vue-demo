import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import Menu from  './components/Menu'
import Admin from  './components/Admin'
import About from  './components/about/About'
import Login from  './components/Login'
import Register from  './components/Register'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Home},
  {path:'/menu',component:Menu},
  {path:'/admin',component:Admin},
  {path:'/about',component:About},
  {path:'/login',component:Login},
  {path:'/register',component:Register},

]
const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
