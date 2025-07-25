<script setup lang="ts">
  import WeatherCard from '@/components/common/WeatherCard.vue'
  import { onMounted, ref } from 'vue';
  import { useCityWeather } from '@/composables/useCityWeather.ts';

  const initialCityNames = ['Gliwice', 'Hamburg'];
  const { addCity, cities } = useCityWeather();

  const inputValue = ref<string | null>(null);
  const inputError = ref<string | null>(null);

  onMounted(() => {
    initialCityNames.forEach((cityName) => {
      addCity(cityName);
    })
  })

  function onDelete(cityId: string) {
    cities.value = cities.value.filter((city) => city.id !== cityId);
  }

  function onAddCity(): void {
    if (inputValue.value) {
      if (cities.value.find((city) => city.name.toLowerCase() === inputValue.value?.toLowerCase())) {
        inputError.value = 'City is already on the list';
      } else {
        addCity(inputValue.value);
      }
    }
  }


</script>

<template>
  <v-container class="d-flex flex-column align-center">
    <v-row
      no-gutters
      class="actions-container"
    >
      <v-text-field
        :error-messages="inputError"
        label="City"
        placeholder="Enter city name that you would like to see"
        v-model="inputValue"
        @keydown.enter="onAddCity"
      />

      <v-btn
        @click="onAddCity"
        icon="mdi-plus"
      />
    </v-row>

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
          @delete="onDelete"
        />
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped lang="scss">

.actions-container {
  display: flex;
  column-gap: 1.25rem;
  align-items: center;
  width: 100%;
  padding-bottom: 1.25rem;

  @media only screen and (width >= 1920px) {
    width: 50%;
  }
}

</style>