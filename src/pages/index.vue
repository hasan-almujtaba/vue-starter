<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>

<template>
  <div class="container py-10">
    <div class="text-center">
      <h1 class="text-3xl text-center font-black text-blue-600">
        Vue 3 SSG Starter
      </h1>
      <div class="text-blue-400 tracking-widest font-light">
        Scaffolding Vue 3 Project With Ease
      </div>
    </div>

    <div class="mt-10 max-w-xl mx-auto flex flex-col lg:flex-row justify-center gap-2">
      <base-button href="https://github.com/hasan-almujtaba/vue3-ssg-starter" target="_blank" class="w-full lg:w-40">
        <i-mdi-arrow-right-thick />
        <span>get started</span>
      </base-button>
      <base-button to="example" class="w-full lg:w-40">
        <i-carbon-code />
        <span>example</span>
      </base-button>
    </div>
  </div>
</template>
