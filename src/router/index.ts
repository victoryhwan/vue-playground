import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
// import { useAuthStore } from '@/stores/pinia/auth.store'
import { useUserStore } from '@/stores/pinia/user.store'
// import type { Auth } from '@/types/user'

const requireAuth = (to:any, from:any, next:any)=>{
  // const store:Auth = useAuthStore()
  const userStore = useUserStore()
  if(Object.keys(userStore.user).length === 0){
    console.log("no user data")
    next({name: 'login'})
  }else{
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter:requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutView.vue'),
      beforeEnter:requireAuth
    },
    {
      path: '/inPatientList',
      name: 'inPatientList',
      component: () => import('@/pages/InPatient.vue'),
    },
    {
      path: '/outPatientList',
      name: 'outPatientList',
      component: () => import('@/pages/OutPatient.vue'),
    }
  ]
})

export default router
