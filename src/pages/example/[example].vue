<script setup lang="ts">
import { useExample } from '~/stores/example'

const postStore = useExample()

useHead({
  title: postStore.title,
})
</script>

<template>
  <div class="container mx-auto text-center">
    <h1 class="text-xl lg:text-2xl text-blue-700 font-black mb-5">
      {{ postStore.title || 'Title Here' }}
    </h1>
    <p>
      {{ postStore.body || 'Content Here' }}
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
