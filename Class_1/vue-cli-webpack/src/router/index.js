import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/views/test'
import Other from '@/views/other'
import abc from '@/views/abc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    {
      path: '/abc',
      name: 'abc',
      component: abc
    }
  ]
})
