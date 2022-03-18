<template>
  <router-view v-slot="{ Component, route }">
    <transition enter-from-class="opacity-0" enter-active-class="transition duration-500" enter-to-class="opacity-100" leave-from-class="opacity-100" leave-active-class="transition duration-500" leave-to-class="opacity-0">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>
