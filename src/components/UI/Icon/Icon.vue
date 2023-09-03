<script lang="ts" setup>
  import { computed } from 'vue'
  import icons from './icons'

  const props = defineProps({
    name: {
      type: String,
      default: 'bell'
    }
  })
  const icon = computed(() => {
    return icons[props.name]
  })
</script>
<template>
  <span class="icon" v-html="icon"></span>
</template>

<style lang="scss" scoped></style>
