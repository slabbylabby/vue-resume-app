<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style scoped>
.app-main {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* All viewports: allow natural scrolling */
.app-main {
  min-height: 100vh;
}
</style>
