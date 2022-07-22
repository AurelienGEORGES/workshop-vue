import { createRouter, createWebHistory } from 'vue-router'
import Connexion from '../views/Connexion.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    }
  ]
})

export default router
