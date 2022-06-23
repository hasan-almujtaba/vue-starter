<script
  setup
  lang="ts"
>
import { useExample } from '~/stores/example'

/**
 * Initialize Store
 */
const exampleStore = useExample()

/**
 * Fetch data from api and set to store on mounted
 */
onMounted(() => {
  exampleStore.getPosts()
})
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <ExampleCard
      v-for="(item, i) in exampleStore.posts"
      :key="i"
      v-bind="item"
    />
  </div>
</template>
