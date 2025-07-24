import { ZZ_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/main/Main.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/not-found/NotFound.vue'),
    }
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localCache.getCache(ZZ_TOKEN)
  if (to.name !== 'Login' && !token) {
    next({ name: 'Login' }) // 未登录时重定向到登录页
  } else {
    next() // 允许访问
  }
})

export default router
