import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      children: [
        {
          path: ':id', // 這裡更改為 ':id'
          component: () => import('../views/ShopList.vue')
        }
      ]
    }
  ]
})

export default router
