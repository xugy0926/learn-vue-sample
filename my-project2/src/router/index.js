import Vue from 'vue'
import Router from 'vue-router'
import Task from '@/components/Task'
import History from '@/components/History'
import FirstPage from '@/components/FirstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
  ]
})
