<script setup lang="ts">
import api from '~/apis'
import type Example from '~/types/example.interface'
import { useExample } from '~/stores/example'

const exampleStore = useExample()
const response = ref<Example[]>([])
const postTotal = ref(20)
const posts = computed(() => response.value.filter((post: Example, i) => i <= postTotal.value))

const getData = async() => {
  const { data } = await api.get('posts')

  response.value = data
}

const setPost = (post: Example) => exampleStore.setExample(post)

onMounted(() => {
  getData()
})

</script>

<template>
  <div>
    <h1 class="text-2xl lg:text-4xl capitalize font-semibold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-blue-700 mb-5">
      fake json response
    </h1>

    <p>
      Showing {{ postTotal }} Posts
    </p>

    <example-dropdown class="mb-5 mt-3" @change:post-total="postTotal = $event" />

    <div class="flex flex-wrap gap-2">
      <router-link v-for="(item, i) in posts" :key="i" :to="`/example/${item.id}`" as="div" class="bg-gray-200 p-2 rounded" @click="setPost(item)">
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: example
</route>
