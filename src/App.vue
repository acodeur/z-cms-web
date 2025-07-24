<template>
  <div class="app">
    <router-view />
    <!-- <El /> -->
  </div>
</template>

<script setup lang="ts">
import El from './views/El.vue'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
