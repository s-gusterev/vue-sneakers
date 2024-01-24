import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import Profile from './pages/Profile.vue'

const routes = [
  {
    path: '/vue-sneakers/',
    component: Home,
    name: 'home'
  },
  {
    path: '/vue-sneakers/favorites',
    component: Favorites,
    name: 'favorites'
  },
  {
    path: '/vue-sneakers/profile',
    component: Profile,
    name: 'profile'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
