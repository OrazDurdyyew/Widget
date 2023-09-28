<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()

  interface Languages {
    key: string
    name: string
  }
  const activeLang = ref(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')
  const langs = ref<Languages[]>([
    {
      key: 'en',
      name: 'EN'
    },
    {
      key: 'ae',
      name: 'AE'
    }
  ])
  locale.value = activeLang.value
  const setLocale = (key: string) => {
    localStorage.setItem('lang', key)
    locale.value = key
    activeLang.value = key
  }
</script>
<template>
  <div class="flex gap-10 bg-white dark:bg-black rounded p-2">
    <button
      v-for="lang in langs"
      :key="lang.key"
      @click="setLocale(lang.key)"
      :class="{ 'bg-primary p-2 rounded text-white': lang.key === activeLang }"
      class="p-2"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<style scoped></style>
