<script setup lang="ts">
  import Home from '@/components/view/Home.vue'
  import WeatherView from '@/components/view/WeatherView.vue'
  import { ref } from 'vue'

  const showHome = ref(true)

  function onProceed(): void {
    showHome.value = !showHome.value
  }

</script>

<template>
  <Transition
    name="fade"
    mode="out-in"
  >
    <Home
      v-if="showHome"
      @proceed="onProceed"
    />

    <WeatherView v-else/>
  </Transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>