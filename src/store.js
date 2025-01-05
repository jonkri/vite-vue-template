import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  actions: {
    increment() {
      this.value++;
    }
  },
  state: () => ({ value: 0 })
});
