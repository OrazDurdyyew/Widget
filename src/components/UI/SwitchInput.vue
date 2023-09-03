<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import TheIcon from '@/components/UI/Icon'

  const isDarkmode = ref(localStorage.getItem('isDarkmode') === 'true' ? true : false)

  const switchTheme = () => {
    const switchToggle: any = document.querySelector('#switch-toggle')
    let element = document.querySelector('html')

    if (isDarkmode.value) {
      switchToggle.classList.remove('bg-yellow-500', '-translate-x-2')
      switchToggle.classList.add('bg-gray-700', 'translate-x-full')
      element?.classList.add('dark')
    } else {
      switchToggle.classList.add('bg-yellow-500', '-translate-x-2')
      switchToggle.classList.remove('bg-gray-700', 'translate-x-full')
      element?.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    isDarkmode.value = !isDarkmode.value
    localStorage.setItem('isDarkmode', String(isDarkmode.value))
    switchTheme()
  }

  onMounted(() => {
    switchTheme()
  })

  watch(isDarkmode, (val) => {
    val
    switchTheme()
  })
</script>
<template>
  <div class="scale-150">
    <button @click="toggleTheme" class="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow">
      <div id="switch-toggle" class="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white">
        <the-icon :name="isDarkmode ? 'sun' : 'moon'"></the-icon>
      </div>
    </button>
  </div>
</template>

<style scoped></style>
