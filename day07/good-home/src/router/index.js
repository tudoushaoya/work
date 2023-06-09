import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import BottomNav from '@/views/BottomNav.vue'
import MyMap from '@/views/MyMap.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/map',
    component: MyMap
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/city',
    component: () => import('@/views/CitySelection.vue')
  },
  {
    path: '/bott',
    component: () => import('@/views/BottomNav.vue')
  },
  {
    path: '/',
    component: BottomNav,
    children: [
      {
        path: '/indexhome',
        component: () => import('@/views/IndexHome.vue')
      },
      {
        path: '/find',
        component: () => import('@/views/FindHome.vue')
      },
      {
        path: '/consult',
        component: () => import('@/views/ConsultPage.vue')
      },
      {
        path: '/my',
        component: () => import('@/views/MyPage.vue')
      }]
  }
]

const router = new VueRouter({
  routes
})

export default router
