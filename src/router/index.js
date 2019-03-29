import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Airports from '@/components/Airports'
import AllStatistics from '@/components/AllStatistics'
import Carriers from '@/components/Carriers'
import NotFound from '@/components/error-pages/NotFound'
import airport from '@/components/airport'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/Airports',
      name: 'Airports',
      component: Airports
    },
    {
      path: '/Carriers',
      name: 'Carriers',
      component: Carriers
    },
    {
      path: '/AllStatistics',
      name: 'AllStatistics',
      component: AllStatistics
    },
    {
      path: '/airport',
      name: 'airport',
      component: airport
    },
  ]
})
