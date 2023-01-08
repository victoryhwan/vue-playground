import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/AboutView.vue')
    },
    {
      path: '/inPatientList',
      name: 'inPatientList',
      component: () => import('@/pages/InPatient.vue'),
      // beforeEnter: (to, from, next) => {
      //   alert("로그인이 필요한 서비스 입니다.")
      //   next("/")
      // }
    },
    {
      path: '/outPatientList',
      name: 'outPatientList',
      component: () => import('@/pages/OutPatient.vue'),
    }
  ]
})

export default router
