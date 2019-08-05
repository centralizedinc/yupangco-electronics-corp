import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/guitars/electric',
      name: 'electricGuitars',
      component: () => import('./views/guitars/electric.vue')
    },
    {
      path: '/guitars/acoustic',
      name: 'acousticGuitars',
      component: () => import('./views/guitars/acoustic.vue')
    },
    {
      path: '/guitars/bass',
      name: 'bassGuitars',
      component: () => import('./views/guitars/bass.vue')
    }
  ]
})