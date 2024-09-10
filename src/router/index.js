import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stacking-card',
      name: 'stacking-card',
      component: () => import('@/views/StackingCard.vue')
    },
    {
      path: '/scroll-trigger',
      name: 'scroll-trigger',
      component: () => import('@/views/ScrollTrigerAnimations.vue')
    },
    {
      path: '/horizontal-scroll',
      name: 'horizontal-scroll',
      component: () => import('@/views/HorizontalScroll.vue')
    }
  ]
})

export default router
