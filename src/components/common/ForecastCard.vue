<script setup lang="ts">
  import { ForecastDay } from '@/interfaces/ForecastWeatherResponse.ts';
  import { TempType } from '@/enums/TempType.ts';
  import useDateFormatter from '@/composables/useDateFormatter.ts';

  interface Props {
    forecastData: ForecastDay;
    tempType: TempType;
  }

  const { formatToShortWeekdayDay } = useDateFormatter()

  defineProps<Props>();
</script>

<template>
  <v-card
    elevation="3"
    class="card-container"
  >
    <v-card-title class="title">{{formatToShortWeekdayDay(forecastData.date)}}</v-card-title>

    <v-img :src="forecastData.day.condition.icon"/>

    <div v-if="tempType === TempType.Celsius">
      <p class="temperature">{{forecastData.day.maxtemp_c.toFixed(0)}} &deg </p>
      <p class="temperature--low">{{forecastData.day.mintemp_c.toFixed(0)}} &deg </p>
    </div>

    <div v-else>
      <p class="temperature">{{forecastData.day.maxtemp_f.toFixed(0)}} &deg</p>
      <p class="temperature--low">{{forecastData.day.mintemp_f.toFixed(0)}} &deg</p>
    </div>

  </v-card>
</template>

<style scoped lang="scss">

.card-container {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  height: 100%;
  border-radius: 0.75rem;

  @media only screen and (width >= 600px) {
    grid-template-rows: 1fr 5rem 1fr;
  }
}

.title {
  font-size: 0.8rem;
  padding: 0.5rem 0 0 0;
  white-space: normal;

  @media only screen and (width >= 600px) {
    font-size: 1rem;
  }
}

.temperature {
  font-family: "Nunito", sans-serif;
  font-weight: 500;

  &--low {
    @extend .temperature;
    color: grey;
  }

  @media only screen and (width >= 600px) {
    font-size: 1rem;
  }
}

</style>