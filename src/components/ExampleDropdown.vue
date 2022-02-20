<script setup lang="ts">
const emit = defineEmits<{
  (e: 'change:post-total', value: number): void
}>()

const amounts = ref([20, 40, 60, 80, 100])

</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <menu-button
        class="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-t from-blue-400 to-blue-700 rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Options
        <i-mdi-chevron-down />
      </menu-button>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <menu-items
        class="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <menu-item v-for="(item,i) in amounts" v-slot="{ active }" :key="i">
            <button
              :class="[
                active ? 'bg-blue-500 text-white' : 'text-gray-900',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm gap-x-2',
              ]" @click="emit('change:post-total', item)"
            >
              <i-mdi-circle-medium />
              <span>{{ item }} Post</span>
            </button>
          </menu-item>
        </div>
      </menu-items>
    </transition>
  </Menu>
</template>
