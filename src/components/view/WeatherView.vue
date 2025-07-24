<script setup lang="ts">
  import WeatherCard from '@/components/common/WeatherCard.vue'
  import { onMounted } from 'vue';
  import { useCityWeather } from '@/composables/useCityWeather.ts';

  const initialCityNames = ['Gliwice', '...'];
  const { addCity, cities } = useCityWeather();

  onMounted(async () => {
    initialCityNames.map(name => addCity(name));
  })

</script>

<template>
  <v-container>
    <v-row
      no-gutters
      class="w-100 h-100 ga-10 justify-center"
    >
      <v-col
        v-for="city in cities"
        :key="city.id"
        cols="12"
        xl="5"
      >
        <WeatherCard
          :city-data="city"
        />
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped lang="scss">

</style>