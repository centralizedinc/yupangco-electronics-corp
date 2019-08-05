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
      path: '/accessories/keyboard',
      name: 'accessoriesKeyboard',
      component: () => import('./views/accessories/keyboard.vue')
    },
    {
      path: '/ampsEffects/electricGuitar',
      name: 'ampsEffectsElectricGuitar',
      component: () => import('./views/ampsEffects/electricGuitar.vue')
    },
    {
      path: '/bandOrchestra/woodwinds',
      name: 'bandOrchestraWoodwinds',
      component: () => import('./views/bandOrchestra/woodwinds.vue')
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
    },
    {
      path: '/keyboards/digital',
      name: 'keyboardsDigital',
      component: () => import('./views/keyboards/digital.vue')
    },
    {
      path: '/keyboards/grand',
      name: 'keyboardsGrand',
      component: () => import('./views/keyboards/grand.vue')
    },
    {
      path: '/keyboards/upright',
      name: 'keyboardsUpright',
      component: () => import('./views/keyboards/upright.vue')
    },
    {
      path: '/percussion/acoustic',
      name: 'percussionAcoustic',
      component: () => import('./views/percussion/acoustic.vue')
    },
    {
      path: '/percussion/digital',
      name: 'percussionDigital',
      component: () => import('./views/percussion/digital.vue')
    },
    {
      path: '/percussion/electronic',
      name: 'percussionElectronic',
      component: () => import('./views/percussion/electronic.vue')
    },
    {
      path: '/payments',
      name: 'Payments',
      component: () => import('./views/Payment.vue')
    }
  ]
})