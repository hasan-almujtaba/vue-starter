<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>

<template>
  <div class="container py-10">
    <h1 class="text-xl lg:text-6xl text-center font-black">
      <span class="text-[#42b983]">Vue 3 SSG</span> + <span class="text-[#0EA5E9]">Tailwind CSS</span>  + <span class="text-blue-700">Headless UI</span>
    </h1>

    <div class="mt-20 max-w-xl mx-auto flex justify-center gap-2">
      <base-button href="https:github.com/hasan-almujtaba/vue3-ssg-starter" target="_blank" class="w-40">
        <i-mdi-arrow-right-thick />
        <span>get started</span>
      </base-button>
      <base-button to="example" class="w-40">
        <i-carbon-code />
        <span>example</span>
      </base-button>
      <base-button to="about" class="w-40">
        <i-mdi-information />
        <span>about</span>
      </base-button>
    </div>
  </div>
</template>
