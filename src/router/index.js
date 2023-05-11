import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/pocetna',
    name: 'Pocetna',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pocetna.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/oglas-ponuda',
    name: 'Oglas-ponuda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Oglas-ponuda.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/oglas-potraznja',
    name: 'Oglas-potraznja',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Oglas-potraznja.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/ponuda',
    name: 'Ponuda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ponuda.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/potraznja',
    name: 'Potraznja',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Potraznja.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/moji-oglasi',
    name: 'MojiOglasi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MojiOglasi.vue'),
    meta: {
      needsUser: true,
    },
  }
]

// meta - dodatni podaci vezani za rutu
// stranice gdje je needsUser: true označava da za te stranice korisnici trebaju biti ulogirani 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

// scrollBehavior služi da nas uvijek prebaci na početak nove stranice prilikom mijenjanja rute 


/*router.beforeEach ((to, from, next) => {
  console.log("Stara ruta: ", from.name, "nova ruta: ", to.name, "korisnik", store.currentUser)
  const noUser = (store.currentUser === null);
  if(noUser && to.meta.needsUser) {
    next({name:'Signin'});
  }
  else {
    next();
  }
})*/

export default router
