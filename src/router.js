import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import Profile from './pages/Profile.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/favorites',
    component: Favorites,
    name: 'favorites'
  },
  {
    path: '/profile',
    component: Profile,
    name: 'profile'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
