import { acceptHMRUpdate, defineStore } from 'pinia'
import type ExampleInterface from '~/types/example.interface'

export const useExample = defineStore('example', {
  state: () => ({
    id: 0,
    userId: 0,
    title: '',
    body: '',
  } as ExampleInterface),
  actions: {
    setExample(example: ExampleInterface) {
      this.id = example.id
      this.userId = example.userId
      this.title = example.title
      this.body = example.body
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useExample, import.meta.hot))
