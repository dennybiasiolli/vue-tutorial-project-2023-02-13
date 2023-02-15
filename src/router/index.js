import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import Bindings from '@/components/Bindings.vue'
import CounterView from '@/components/CounterView.vue'
import Tests from '@/components/Tests.vue'
import Tests2 from '@/components/Tests2.vue'
import Tests3 from '@/components/Tests3.vue'
import TodoUtility from '@/components/TodoUtility.vue'

export const routes = [
  {
    path: '/bindings',
    component: Bindings,
  },
  {
    path: '/counter',
    component: CounterView,
  },
  {
    path: '/tests',
    component: Tests,
  },
  {
    path: '/tests2',
    component: Tests2,
  },
  {
    path: '/tests3',
    component: Tests3,
  },
  {
    path: '/to-do-list',
    name: 'todo',
    component: TodoUtility,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
