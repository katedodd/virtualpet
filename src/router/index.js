import Vue from 'vue'
import VueRouter from 'vue-router'
import TestPage from "../pages/TestPage";
import DrawingPage from "../pages/DrawingPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TestPage
  },
  {
    path: '/drawing',
    name: 'Draw',
    component: DrawingPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
