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
    async switchTodo(id, completed) {
      try {
        await axios.patch(`/todos/${id}`, { completed })
        this.getTodoItems()
      } catch { }
    },
    async updateTodo(id, text) {
      try {
        await axios.patch(`/todos/${id}`, { text })
        this.getTodoItems()
      } catch { }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`/todos/${id}`)
        this.getTodoItems()
      } catch { }
    },
  },
})
