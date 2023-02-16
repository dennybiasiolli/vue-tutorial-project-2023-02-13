import axios from 'axios'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ items: [] }),
  getters: {
    completedItems: (state) => state.items.filter((item) => item.completed),
    todoItems: (state) => state.items.filter((item) => !item.completed),
  },
  actions: {
    async addTodo(text) {
      try {
        await axios.post('/todos', { text })
        this.getTodoItems()
      } catch (error) { }
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
