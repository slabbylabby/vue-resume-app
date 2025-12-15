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

/* Mobile: lock to viewport height to prevent scrolling */
@media (max-width: 768px) {
  .app-main {
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }
}

/* Desktop: allow natural height and scrolling */
@media (min-width: 769px) {
  .app-main {
    min-height: 100vh;
    overflow: visible;
  }
}
</style>
