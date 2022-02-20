import { acceptHMRUpdate, defineStore } from 'pinia'
import type Example from '~/types/example.interface'

export const useExample = defineStore('example', {
  state: () => ({
    id: '',
    userId: '',
    title: '',
    body: '',
  }),
  actions: {
    setExample(example: Example) {
      this.id = example.id
      this.userId = example.userId
      this.title = example.title
      this.body = example.body
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useExample, import.meta.hot))
