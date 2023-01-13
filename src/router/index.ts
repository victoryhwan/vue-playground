import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/pinia/user.store'


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
      name: 'index',
      component: () => import('@/pages/HomeView.vue'),
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
    },
    {
      path: '/opPatientList',
      name: 'opPatientList',
      component: () => import('@/pages/OpPatient.vue'),
    },
    // {
    //   path: '/emPatientList',
    //   name: 'emPatientList',
    //   component: () => import('@/pages/EmPatient.vue'),
    // },
    // {
    //   path: '/coPatientList',
    //   name: 'coPatientList',
    //   component: () => import('@/pages/CoPatient.vue'),
    // },
    // {
    //   path: '/rvPatientList',
    //   name: 'rvPatientList',
    //   component: () => import('@/pages/RvPatient.vue'),
    // }
  ]
})

export default router
