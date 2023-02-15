import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    isEven: (state) => state.count % 2 === 0,
    isPositive: (state) => state.count > 0,
  },
  actions: {
    increment(valore) {
      this.count = this.count + valore
    },
    multiply(valore) {
      this.count = this.count * valore
    },
    reset() {
      this.count = 0
    },
  },
})
