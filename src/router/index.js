import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
import AccueilView from '../views/AccueilView.vue'
import medecinView from '../views/MedecinView.vue'
import rapportsView from '../views/RapportsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: loginView
  },
  {
    path: '/medecin',
    name: 'medecin',
    component: medecinView
  },
  {
    path: '/rapports',
    name: 'rapports',
    component: rapportsView
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: AccueilView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
