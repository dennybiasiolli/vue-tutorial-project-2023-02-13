import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ items: [] }),
  getters: {
    completedItems: (state) => state.items.filter((item) => item.completed),
    todoItems: (state) => state.items.filter((item) => !item.completed),
  },
  actions: {
    switchTodo(id, completed) {
      const item = this.items.find((item) => item.id === id)
      item.completed = completed
    },
  },
})
