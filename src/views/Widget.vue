<script setup lang="ts">
  import { computed, watchEffect, ref } from 'vue'
  import { WidgetDate } from '@/types/index'

  import WidgetHeader from '@/components/WidgetHeader.vue'
  import WidgetSlider from '@/components/WidgetSlider.vue'
  import TheLanguages from '@/components/TheLanguages.vue'
  import WidgetGrid from '@/components/WidgetGrid.vue'
  import WidgetCard from '@/components/WidgetCard.vue'
  import SwitchInput from '@/components/UI/SwitchInput.vue'
  import { session } from '@/helpers/index'

  import { useStore } from 'vuex'

  const store = useStore()

  store.dispatch('getDateList')
  const activeDate = computed<WidgetDate>(() => store.getters.activeDate)
  const sortedSessions = ref([])
  watchEffect(() => {
    sortedSessions.value = session[activeDate.value.date] || []
    console.log(session[activeDate.value.date])
  })

  const activeCard = ref<any>(null)
  const toggleActive = (index: number) => {
    activeCard.value = index
  }
</script>
<template>
  <div class="min-w-320">
    <div class="mb-16 flex justify-between px-12">
      <the-languages></the-languages>
      <switch-input></switch-input>
    </div>
    <div
      class="px-12 py-20 bg-white dark:bg-black rounded-xl shadow-xs border border-solid border-border"
      style="box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.04)"
    >
      <widget-header></widget-header>
      <widget-slider></widget-slider>
      <widget-grid>
        <widget-card
          v-for="(item, index) in sortedSessions"
          :key="index"
          :session="item"
          @click="toggleActive(index)"
          :active="index === activeCard"
        ></widget-card>
      </widget-grid>
    </div>
  </div>
</template>

<style scoped></style>
