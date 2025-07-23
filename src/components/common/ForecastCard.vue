<script setup lang="ts">
  import { ForecastDay } from '@/interfaces/ForecastWeatherResponse.ts';
  import { TempType } from '@/enums/TempType.ts';
  import useDateFormatter from '@/composables/useDateFormatter.ts';

  interface Props {
    forecastData: ForecastDay
    tempType: TempType
  }

  const { formatToShortWeekdayDay } = useDateFormatter()

  defineProps<Props>();
</script>

<template>
  <v-card>
    <v-card-title>{{formatToShortWeekdayDay(forecastData.date)}}</v-card-title>
    <v-img :src="forecastData.day.condition.icon"/>

    <div v-if="tempType === TempType.Celsius">
      <p>{{forecastData.day.maxtemp_c}}</p>
      <p>{{forecastData.day.mintemp_c}}</p>
    </div>

    <div v-else>
      <p>{{forecastData.day.maxtemp_f}}</p>
      <p>{{forecastData.day.mintemp_f}}</p>
    </div>

  </v-card>
</template>

<style scoped lang="scss">

</style>