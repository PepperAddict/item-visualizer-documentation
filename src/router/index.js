import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Documentation from '../components/Documentation'
import Privacy from '../components/Privacy'
import Terms from '../components/Terms'
import Contact from '../views/Contact'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/how',
    name: 'How',
    component: Documentation
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  }, 
  {
    path: '/terms',
    name: "Terms",
    component: Terms
  }, 
  {
    path: '/contact',
    name: "Contact",
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
