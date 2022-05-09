<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>

<template>
  <div class="container py-10">
    <div class="text-center">
      <h1 class="text-3xl font-black text-center text-blue-600">
        Vue 3 SSG Starter
      </h1>
      <div class="font-light tracking-widest text-blue-400">
        Scaffolding Vue 3 Project With Ease
      </div>
    </div>

    <div class="flex flex-col justify-center max-w-xl gap-2 mx-auto mt-10 lg:flex-row">
      <BaseButton href="https://github.com/hasan-almujtaba/vue3-ssg-starter" target="_blank" class="w-full lg:w-40">
        <i-mdi-arrow-right-thick />
        <span>get started</span>
      </BaseButton>
      <BaseButton to="example" class="w-full lg:w-40">
        <i-carbon-code />
        <span>example</span>
      </BaseButton>
    </div>
  </div>
</template>
