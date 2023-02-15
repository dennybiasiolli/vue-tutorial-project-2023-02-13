import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import Bindings from '@/components/Bindings.vue'
import CounterView from '@/components/CounterView.vue'
import HomePage from '@/components/HomePage.vue'
import NotFound from '@/components/NotFound.vue'
import Tests from '@/components/Tests.vue'
import Tests2 from '@/components/Tests2.vue'
import Tests3 from '@/components/Tests3.vue'
import TodoUtility from '@/components/TodoUtility.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/bindings',
    name: 'bindings',
    component: Bindings,
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView,
  },
  {
    path: '/tests',
    name: 'tests',
    component: Tests,
  },
  {
    path: '/tests2',
    name: 'tests2',
    component: Tests2,
  },
  {
    path: '/tests3',
    name: 'tests3',
    component: Tests3,
  },
  {
    path: '/to-do-list',
    name: 'todo',
    component: TodoUtility,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
