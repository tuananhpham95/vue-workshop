import { createRouter, createWebHistory } from 'vue-router'
import AboutVue from '@/views/About.vue'
import HomeVue from '@/views/Home.vue'
import MoviesVue from '@/views/Movies.vue'
import UserVue from '@/views/User.vue'
import UserDetailVue from '@/views/UserDetail.vue'
import NotFoundVue from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomeVue
  },
  {
    path: '/about',
    name: 'about-page',
    component: AboutVue
  },
  {
    path: '/movies',
    name: 'movies-page',
    component: MoviesVue
  },
  {
    path: '/users',
    name: 'users-page',
    component: UserVue
  },
  {
    path: '/users/:id',
    name: 'users-details-page',
    component: UserDetailVue
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found-page',
    component: NotFoundVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
