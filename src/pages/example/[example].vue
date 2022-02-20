<script setup lang="ts">
import { useExample } from '~/stores/example'

const postStore = useExample()

useHead({
  title: postStore.title,
})
</script>

<template>
  <div>
    <h1 class="text-xl lg:text-2xl text-blue-700">
      {{ postStore.title || 'Untitled' }}
    </h1>
    <p>
      {{ postStore.body || 'Empty Body' }}
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
