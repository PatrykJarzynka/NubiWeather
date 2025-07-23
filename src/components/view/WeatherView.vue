<script setup lang="ts">
  import { ForecastWeatherResponse } from '@/interfaces/ForecastWeatherResponse.ts';
  import { gliwiceForecastData, hamburgForecastData } from '@/utils/mockData.ts';
  import WeatherCard from '@/components/common/WeatherCard.vue'

  const weatherData: ForecastWeatherResponse[] = [gliwiceForecastData, hamburgForecastData];

</script>

<template>
  <v-container>
    <v-row class="w-100 h-100">
      <v-col
        cols="12"
        xl="6"
        v-for="item in weatherData"
      >
        <WeatherCard :forecast-data="item"/>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped lang="scss">

</style>