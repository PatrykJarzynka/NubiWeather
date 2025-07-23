<script setup lang="ts">
  import { ForecastWeatherResponse } from '@/interfaces/ForecastWeatherResponse.ts';
  import moment from 'moment/moment';

  interface Props {
    forecastData: ForecastWeatherResponse
  }

  defineProps<Props>();

  function convertDate(date: string): string {
    return moment(date).format('dddd, HH:mm');
  }
</script>

<template>
  <v-card class="px-4 rounded-xl">
    <div class="title-container">
      <v-card-title class="location">{{forecastData.location.name}}, {{forecastData.location.country}}</v-card-title>

      <v-card-subtitle class="date">{{convertDate(forecastData.location.localtime)}}</v-card-subtitle>
    </div>

    <v-card-text class="d-flex flex-column justify-center ga-10">
      <v-row
        no-gutters
        class="card-content-container"
      >
        <v-col
          cols="6"
          sm="2"
          lg="1"
        >
          <v-img :src="forecastData.current.condition.icon"/>
        </v-col>

        <v-col
          class="temperature-column"
        >
          <p class="temperature-number">{{forecastData.current.temp_c.toFixed(0)}}</p>

          <div class="d-flex flex-column">
            <v-btn
              height="50%"
              icon="mdi-temperature-celsius"
              class="temperature-type-button"
              variant="flat"
              :ripple="false"
            />

            <v-btn
              disabled
              height="50%"
              icon="mdi-temperature-fahrenheit"
              class="temperature-type-button"
              variant="flat"
              :ripple="false"
            />
          </div>

        </v-col>
      </v-row>

      <v-divider style="opacity: 1"/>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  column-gap: 15px;

  @media only screen and (width >= 600px) {
    width: fit-content;
    text-align: left;
  }

  @media only screen and (width >= 960px) {
    flex-direction: row;
  }
}

.card-content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (width >= 600px) {
    flex-direction: row;
  }
}

.temperature-column {
  display: flex;
  justify-content: center;
  gap: 10px;

  @media only screen and (width >= 600px) {
    justify-content: flex-start;
  }
}

.location {
  font-family: "Nunito", sans-serif;
  font-size: 1.3rem;
  padding: 0;

  @media only screen and (width >= 600px) {
    font-size: 1rem;
    width: 100%;
  }

  @media only screen and (width >= 960px) {
    font-size: 1.5rem;
    width: fit-content;
  }
}

.date {
  font-size: 1rem;
  padding: 0;

  @media only screen and (width >= 600px) {
    font-size: 1.1rem;
  }
}

.temperature-number {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 1;
  display: flex;
  align-items: center;

  @media only screen and (width >= 600px) {
    font-size: 4rem;
  }

  @media only screen and (width >= 960px) {
    font-size: 5rem;
  }
}

.temperature-type-button {
  font-size: 0.9rem;
  aspect-ratio: 1;

  @media only screen and (width >= 600px) {
    font-size: 0.9rem;
    aspect-ratio: unset;
  }

  @media only screen and (width >= 960px) {
    font-size: 0.9rem;
  }
}


</style>