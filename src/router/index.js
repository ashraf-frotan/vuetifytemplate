import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Country from '../views/Country.vue'
import State from '../views/State.vue'
import Airplane from '../views/Airplane.vue'
import Timetable from '../views/Timetable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/',
    name:'Login',
    component:Login,
    meta:{
      layout:'AuthLayout'
    }
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
    meta:{
      layout:'AuthLayout'
    }
  },{
    path:'/countries',
    name:'Country',
    component:Country
  },
  {
    path:'/states',
    name:'State',
    component:State
  },
  {
    path:'/airplanes',
    name:'Airplane',
    component:Airplane
  },
  {
    path:'/timetable',
    name:'Timetable',
    component:Timetable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
