import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import(/* webpackChunkName: "campaigns" */ '../views/Campaigns.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
