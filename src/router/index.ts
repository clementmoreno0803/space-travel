import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { background: require('@/assets/Backgrounds/Home/background-home.jpg') }
  },
  {
    path: '/Destination',
    name: 'Destination',
    meta: { background: require('@/assets/Backgrounds/Destination/background-destination.jpg') },
    // route level code-splitting
    // this generates a separate chunk (Destination.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Destination" */ '../views/Destination.vue')
  },
  {
    path: '/Crew',
    name: 'Crew',
    meta: { background: require('@/assets/Backgrounds/Crew/background-crew.jpg') },

    // route level code-splitting
    // this generates a separate chunk (Crew.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Crew" */ '../views/Crew.vue')
  },
  {
    path: '/Technology',
    name: 'Technology',
    meta: { background: require('@/assets/Backgrounds/Technology/background-technology.jpg') },
    // route level code-splitting
    // this generates a separate chunk (Technology.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Technology" */ '../views/Technology.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
