<script setup lang="ts">
  import WidgetHeader from '@/components/WidgetHeader.vue'
  import WidgetSlider from '@/components/WidgetSlider.vue'
  import SwitchInput from '@/components/UI/SwitchInput.vue'
</script>
<template>
  <div class="min-w-320">
    <div class="mb-16 flex justify-end px-12">
      <switch-input></switch-input>
    </div>
    <div
      class="px-12 py-20 bg-white dark:bg-black rounded-xl shadow-xs border border-solid border-border"
      style="box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.04)"
    >
      <widget-header></widget-header>
      <widget-slider></widget-slider>
    </div>
  </div>
</template>

<style scoped></style>
