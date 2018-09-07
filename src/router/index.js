import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
