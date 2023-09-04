<script setup lang="ts">
  import TheButton from '@/components/UI/Button.vue'
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()
  const props = defineProps({
    session: {
      type: Object,
      default: {}
    },
    active: {
      type: Boolean,
      default: false
    }
  })

  const getUrl = (img: string) => {
    return new URL(`../assets/img/${img}`, import.meta.url).href
  }

  const cancel = () => {
    alert('session canceled and remove this session')
  }
</script>

<template>
  <div :class="{ 'bg-border': active }" class="border border-border border-solid rounded-xl shadow-xs p-10">
    <div class="flex items-center gap-7 mb-5">
      <img class="rounded-xl" :src="getUrl(props.session.img)" alt="" />

      <div class="pb-10">
        <h2 class="text-[14px] font-bold text-base-900 leading-140 dark:text-white">{{ props.session[`title_${locale}`] }}</h2>
        <p class="font-[400]">{{ props.session[`description_${locale}`] }}</p>
      </div>
    </div>
    <div class="text-base-700 text-[16px] mb-10">→ {{ props.session.time }}</div>
    <div v-if="props.active" class="flex py-10">
      <the-button primary> Join</the-button>
      <the-button @click="cancel"> Dismiss</the-button>
    </div>
  </div>
</template>

<style scoped></style>
