<script setup lang="ts">
  import WeatherCard from '@/components/common/WeatherCard.vue'
  import { onMounted, ref } from 'vue';
  import { useCityWeather } from '@/composables/useCityWeather.ts';

  const initialCityNames = ['Gliwice', 'Hamburg'];
  const { addCity, cities } = useCityWeather();

  const inputValue = ref<string | null>(null);

  onMounted(async () => {
    initialCityNames.map(name => addCity(name));
  })

  function onDelete(cityId: string) {
    cities.value = cities.value.filter((city) => city.id !== cityId);
  }

  function onAddCity(): void {
    if (inputValue.value) {
      addCity(inputValue.value);
    }
  }


</script>

<template>
  <v-container>
    <v-row
      no-gutters
      class="d-flex align-center pb-6 ga-6"
    >
      <v-text-field
        hide-details
        label="City name"
        v-model="inputValue"
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

</style>