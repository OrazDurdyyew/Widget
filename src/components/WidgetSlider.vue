<script setup lang="ts">
  import { ref } from 'vue'
  import TheIcon from '@/components/UI/Icon'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css/navigation'
  import 'swiper/css'

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
</script>
<template>
  <div class="w-320 p-10 flex gap-10">
    <button @click="prevSlide">
      <the-icon name="chevronRight"></the-icon>
    </button>
    <swiper ref="swiperRef" :slides-per-view="3" :space-between="10" hashNavigation>
      <swiper-slide>
        <div class="p-8 border-2 border-solid border-primary rounded-xl flex flex-col gap-5 dark:border-white">
          <h2 class="text-primary text-sm font-bold text-center leading-140">Today</h2>
          <div class="mx-5 flex justify-center">
            <span class="min-w-34 bg-primary rounded-xl px-8 py-6 text-white text-xs text-center">1</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-for="item in 7" :key="item">
        <div class="p-8 border-2 border-solid border-base rounded-xl flex flex-col gap-5 dark:border-border dark:text-base-600">
          <h2 class="text-sm text-center leading-140">Today</h2>
          <div class="mx-5 flex justify-center">
            <span class="min-w-34 bg-border rounded-xl px-8 py-6 text-base-700 text-xs text-center dark:text-base-600">{{ item }}</span>
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
