import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ApplyForm from '@/components/ApplyForm'

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
    }
  ]
})
