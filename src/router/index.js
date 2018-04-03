import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ApplyForm from '@/components/ApplyForm'
import Visa from '@/components/Visa'
import Car from '@/components/Car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/apply',
      name: 'ApplyForm',
      component: ApplyForm
    },
    {
      path: '/visa',
      name: 'Visa',
      component: Visa
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    }
  ]
})
