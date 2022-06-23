import { acceptHMRUpdate, defineStore } from 'pinia'
import { Post } from '~/types/example'
import api from '~/apis/index'

export const useExample = defineStore('example', () => {
  /**
   * Collection of post
   */
  const posts = ref<Post[]>([])

  /**
   * Fetch posts from api and set to state
   */
  const getPosts = async () => {
    const { data } = await api.get('/posts')
    posts.value = data
  }

  /**
   * Delete post from state
   */
  const deletePost = (id: number) => {
    posts.value = posts.value.filter((post) => post.id !== id)
  }

  return {
    posts,
    getPosts,
    deletePost,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useExample, import.meta.hot))
