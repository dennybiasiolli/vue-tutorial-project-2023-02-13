import axios from 'axios'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ items: [] }),
  getters: {
    completedItems: (state) => state.items.filter((item) => item.completed),
    todoItems: (state) => state.items.filter((item) => !item.completed),
  },
  actions: {
    addTodo(text) {
      console.log('addTodo', text)
    },
    async getTodoItems() {
      try {
        const { data } = await axios.get('/todos')
        this.items = data
      } catch {
        this.items = []
      }
    },
    switchTodo(id, completed) {
      const item = this.items.find((item) => item.id === id)
      item.completed = completed
    },
  },
})
