<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  import Empty from '@/layouts/Empty.vue'
  import Default from '@/layouts/Default.vue'

  const route = useRoute()

  const layout = computed(() => (route.meta?.layout == 'empty' ? Empty : Default))


  
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
  @import '@/assets/css/main.css';
</style>
