<script setup lang="ts">
  interface Emits {
    (e: 'proceed'): void;
  }

  const emit = defineEmits<Emits>()

</script>

<template>
  <div
    class="flex flex-col ga-10 items-center"
  >
    <div class="d-flex flex-column align-center ga-3">
      <div>
        <a href="https://nubisoft.io/" target="_blank">
          <img src="@/assets/nubisoft.svg" class="" alt="Nubisoft logo" />
        </a>
      </div>

      <h1>Welcome to <span class="highlighted-text">NubiWeather</span> </h1>
    </div>

    <v-btn
      size="large"
      variant="outlined"
      @click="emit('proceed')"
    >
      Explore the weather
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.highlighted-text {
  font-weight: 600;
  background: linear-gradient(
      to right,
      rgb(0, 193, 124),
      rgb(0, 178, 178),
      rgb(0, 117, 209),
      rgb(0, 193, 124),
  );
  background-clip: text;
  color: transparent;
  background-size: 200%;
  animation: gradientAnimation 1.5s linear infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 200% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

</style>