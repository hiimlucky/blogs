import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import showBlogs from '../components/ShowBlogs.vue'
import addblog from '../components/AddBlog.vue'
import singleblog from '../components/singleblog.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'showBlogs',
    component: showBlogs
  },
  {
    path: '/showBlogs',
    name: 'showBlogs',
    component: showBlogs
  },
  {
    path: '/addblog',
    name: 'addblog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: addblog
  },
  {
    path:'/blog/:id',component:singleblog
  }
   


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
