<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { WidgetDate } from '@/types/index'
  import { useI18n } from 'vue-i18n'

  const { t: $t } = useI18n()
  import TheIcon from '@/components/UI/Icon'

  const store = useStore()

  const activeDate = computed<WidgetDate>(() => store.getters.activeDate)
</script>
<template>
  <div class="flex items-center justify-between mb-16 hover:bg-border rounded-xl">
    <div class="px-12">
      <h2 class="text-base font-bold text-base-900 leading-140 dark:text-white">{{ $t('title') }}</h2>
      <p class="text-xs leading-140 dark:text-white">
        {{ activeDate.dayOfWeek }}, {{ activeDate.month }} {{ activeDate.day }}, {{ activeDate.year }}
      </p>
    </div>
    <div>
      <the-icon name="plus"></the-icon>
    </div>
  </div>
</template>

<style scoped></style>
