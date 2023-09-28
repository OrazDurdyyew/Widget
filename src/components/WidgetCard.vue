<script setup lang="ts">
  import TheButton from '@/components/UI/Button.vue'
</script>

<template>
  <div class="border border-border border-solid rounded-xl shadow-xs p-10">
    <div class="flex items-center gap-7 mb-5">
      <img class="rounded-xl" src="@/assets/img/Basket.svg" alt="" />

      <div class="pb-10">
        <h2 class="text-[14px] font-bold text-base-900 leading-140 dark:text-white">Memorisely</h2>
        <p class="font-[400]">E-Learning</p>
      </div>
    </div>
    <div class="text-base-700 text-[16px] mb-10">→ 01:00 PM to 02:00 PM</div>
    <!-- <div class="flex py-10">
      <the-button primary> Join</the-button>
      <the-button> Dismiss</the-button>
    </div> -->
  </div>
</template>

<style scoped></style>
