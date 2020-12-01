import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Documentation from '../views/Documentation'
import Privacy from '../components/Privacy'
import Terms from '../components/Terms'
import Contact from '../views/Contact'
import Methods from '../components/layout/Methods'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
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
  },
  {
    path: '/methods',
    name: "Methods",
    component: Methods,
    props: true
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})

export default router
