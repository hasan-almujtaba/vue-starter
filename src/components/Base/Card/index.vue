<script lang="ts">
export default { name: 'Card' }
</script>

<script setup lang="ts">
type Props = {
  href?: string
}

const props = defineProps<Props>()
</script>

<template>
  <a
    v-if="props.href"
    :href="props.href"
    class="group relative rounded-lg border border-gray-200 block"
  >
    <div
      class="absolute -inset-0.5 rounded-[inherit] bg-gradient-to-r from-blue-600 to-purple-400 opacity-0 transition-opacity group-hover:opacity-100"
    ></div>

    <div class="relative h-full w-full rounded-[inherit] bg-white p-4">
      <h3
        class="mb-2 w-fit bg-black from-blue-600 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent transition group-hover:bg-gradient-to-r"
      >
        <slot name="title" />
      </h3>

      <div class="text-lg">
        <slot />
      </div>
    </div>
  </a>

  <div
    v-else
    class="group relative rounded-lg border border-gray-200"
  >
    <div
      class="absolute -inset-0.5 rounded-[inherit] bg-gradient-to-r from-blue-600 to-purple-400 opacity-0 transition-opacity group-hover:opacity-100"
    ></div>

    <div class="relative h-full w-full rounded-[inherit] bg-white p-4">
      <h3
        class="mb-2 w-fit bg-black from-blue-600 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent transition group-hover:bg-gradient-to-r"
      >
        <slot name="title" />
      </h3>

      <div class="text-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
