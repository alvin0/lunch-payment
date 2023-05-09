import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '@/views/layouts/Master.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MasterLayout,
      redirect: { path: "/home" },
      children: [
        {
          path: 'home',
          component: () => import('@/views/pages/Home.vue'),
        }
      ]
    }
  ]
})

export default router
