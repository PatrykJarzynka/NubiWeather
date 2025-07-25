<script setup lang="ts">
import ForecastCard from './ForecastCard.vue';
import { Reactive, ref } from 'vue';
import { TempType } from '@/enums/TempType.ts';
import useDateFormatter from '@/composables/useDateFormatter.ts';
import { CityFetchData } from '@/interfaces/CityFetchData.ts';

  interface Props {
    cityData: Reactive<CityFetchData>;
  }

  interface Emit {
    (e: 'delete', cityId: string): void;
  }

  defineProps<Props>();
  const emit = defineEmits<Emit>();

  const { formatToWeekdayTime } = useDateFormatter()
  const selectedTempType = ref<TempType>(TempType.Celsius)
</script>

<template>
  <v-card class="weather-card-container">

    <v-skeleton-loader
      v-if="cityData.isLoading"
      type="card"
    />

    <div
      v-else-if="cityData.error"
      class="error-container"
    >
      <v-card-title>
        Failed to fetch weather data for {{cityData.name}}
      </v-card-title>

      <v-btn
        @click="cityData.refetch()"
        variant="plain"
      >
        Try again
      </v-btn>
    </div>

    <div v-else-if="cityData.data">

      <div class="card-actions">
        <v-tooltip
          location="top"
          text="Refresh"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-refresh"
              @click="cityData.refetch()"
            />
          </template>
        </v-tooltip>

        <v-tooltip
          location="top"
          text="Delete"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-trash-can"
              @click="emit('delete', cityData.id)"
            />
          </template>
        </v-tooltip>
      </div>

      <div
        class="title-container"
      >
        <v-card-title class="location">
          {{cityData.data.location.name}}, {{cityData.data.location.country}}
        </v-card-title>

        <v-card-subtitle class="date">
          {{formatToWeekdayTime(cityData.data.current.last_updated)}}
        </v-card-subtitle>
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
            <v-img :src="cityData.data.current.condition.icon"/>
          </v-col>

          <v-col
            class="temperature-column"
          >
            <p class="temperature-number">
              {{ selectedTempType === TempType.Celsius ? cityData.data.current.temp_c.toFixed(0) : cityData.data.current.temp_f.toFixed(0)}}
            </p>

            <div class="d-flex flex-column">
              <v-btn
                @click="() => selectedTempType = TempType.Celsius"
                density="compact"
                icon="mdi-temperature-celsius"
                :class="['temperature-type-button', selectedTempType === TempType.Celsius ? 'active' : '']"
                variant="text"
                :ripple="false"
              />

              <v-btn
                @click="() => selectedTempType = TempType.Fahrenheit"
                density="compact"
                icon="mdi-temperature-fahrenheit"
                :class="['temperature-type-button', selectedTempType === TempType.Fahrenheit ? 'active' : '']"
                variant="text"
                :ripple="false"
              />
            </div>
          </v-col>
        </v-row>

        <v-divider style="opacity: 1"/>

        <v-row class="forecast-row">
          <v-col
            v-for="forecastItem in cityData.data.forecast.forecastday"
            :key="forecastItem.date_epoch"
            cols="4"
            sm="3"
            md="2"
          >
            <ForecastCard
              :forecastData="forecastItem"
              :tempType="selectedTempType"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </div>
  </v-card>
</template>

<style scoped lang="scss">

.weather-card-container {
  padding: 1.25rem;
  border-radius: 1.5rem;
  background-color: rgb(var(--v-theme-background));
  height: 100%;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  column-gap: 0.938rem;

  @media only screen and (width >= 600px) {
    width: fit-content;
    align-items: flex-start;
  }

  @media only screen and (width >= 960px) {
    flex-direction: row;
    align-items: center;
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
  gap: 0.625rem;

  @media only screen and (width >= 600px) {
    justify-content: flex-start;
  }

  .active {
    color: rgb(var(--v-theme-accent));
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
}

.forecast-row {
  flex-wrap: nowrap;
  overflow: auto;
}

.error-container {
  display: flex;
  flex-direction: column;
  row-gap: 0.938rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(var(--v-theme-errorLight));
  border-radius: 1.5rem;
}

.card-actions {
  display: flex;
  justify-content: space-between;

  @media only screen and (width >= 600px) {
    column-gap: 0.938rem;
    position: absolute;
    right: 1.25rem;
  }

}
</style> asd