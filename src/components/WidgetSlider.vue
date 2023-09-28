<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import { WidgetDate } from '@/types/index'

  import TheIcon from '@/components/UI/Icon'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css/navigation'
  import 'swiper/css'

  const store = useStore()

  const dateList = computed<WidgetDate>(() => store.getters.newDateList)
  const activeDate = computed<WidgetDate>(() => store.getters.activeDate)

  const swiperRef = ref<any>(null)
  const prevSlide = () => {
    if (swiperRef.value) {
      swiperRef.value.$el.swiper.slidePrev()
    }
  }

  const nextSlide = () => {
    if (swiperRef.value) {
      swiperRef.value.$el.swiper.slideNext()
    }
  }

  const getDayName = (name: string, day: number) => {
    let currentDay = new Date().getDate()
    return currentDay === day ? 'Today' : name
  }

  const updateActiveDate = (date: WidgetDate) => {
    store.commit('SET_ACTIVE_DATE', date)
  }
</script>
<template>
  <div class="w-320 p-10 flex gap-10">
    <button @click="prevSlide">
      <the-icon name="chevronRight"></the-icon>
    </button>
    <swiper ref="swiperRef" :slides-per-view="3" :space-between="10" hashNavigation>
      <swiper-slide v-for="(item, index) in dateList" :key="index">
        <div
          @click="updateActiveDate(item)"
          :class="[
            'p-8',
            'border-2',
            'border-solid',
            'border-base',
            'hover:border-primary',
            'rounded-xl',
            'flex',
            'flex-col',
            'gap-5',
            'dark:border-border',
            'dark:hover:border-white',
            'dark:text-base-600',
            { 'border-primary dark:border-white': item.day === activeDate.day }
          ]"
        >
          <h2 :class="{ 'text-primary': item.day === activeDate.day }" class="text-sm text-center leading-140">
            {{ getDayName(item.dayOfWeek, item.day) }}
          </h2>
          <div class="mx-5 flex justify-center">
            <span
              :class="{ 'bg-primary  text-white dark:text-white': item.day === activeDate.day }"
              class="min-w-34 bg-border rounded-xl px-8 py-6 text-base-700 text-xs text-center dark:text-base-600"
              >{{ item.day }}</span
            >
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <button @click="nextSlide">
      <the-icon name="chevronLeft"></the-icon>
    </button>
  </div>
</template>

<style scoped></style>
