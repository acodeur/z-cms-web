import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    incrementBy(amount: number) {
      this.count += amount
    },
    decrementBy(amount: number) {
      this.count -= amount
    },
    resetCount() {
      this.count = 0
    },
  },
})

export default useCounterStore
