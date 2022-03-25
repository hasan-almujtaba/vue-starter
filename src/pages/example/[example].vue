<script setup lang="ts">
import api from '~/apis'
import type ExampleInterface from '~/types/example.interface'

const route = useRoute()

const response = ref<ExampleInterface>({
  body: '',
  id: 0,
  title: '',
  userId: 0,
})

const getData = async() => {
  const { data } = await api.get<ExampleInterface>(`posts/${route.params.example}`)

  response.value = data
}

if (response.value.id === 0) getData()

onServerPrefetch(async() => {
  await getData()
})

useHead({
  title: response.value.title,
})
</script>

<template>
  <div class="container mx-auto text-center">
    <h1 class="text-xl lg:text-2xl text-blue-700 font-black mb-5">
      {{ response.title }}
    </h1>
    <p>
      {{ response.body }}
    </p>
    <base-button to="/example" class="mt-5">
      <i-mdi-arrow-left />
      back to list
    </base-button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: example
</route>
