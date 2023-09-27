import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Index.vue'
//import AppArmas from '../views/AppArmas.vue'
import armas from '../views/Armas.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/armas',
      name: 'armas',
      // route level code-splitting
      // this generates a separate chunk (armas.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: armas
    }
  ]
})

export default router
