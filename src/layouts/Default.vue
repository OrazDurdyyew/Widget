<script lang="ts" setup></script>

<template>
  <div class="main flex justify-center items-center flex-col">
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #e9eaf2;
  }
</style>
