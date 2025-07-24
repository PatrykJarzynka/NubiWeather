import { ref, reactive } from 'vue';
import { useWeatherApi } from '@/services/useWeatherApi';
import { CityFetchData } from '@/interfaces/CityFetchData';

export function useCityWeather() {
  const cities = ref<CityFetchData[]>([]);
  let nextId = 1;

  const addCity = async (cityName: string) => {
    if (cities.value.some(city => city.name.toLowerCase() === cityName.toLowerCase())) {
      console.warn(`City "${cityName}" already exists.`);
      return;
    }

    const { forecast, error, isLoading, fetchForecastByCity } = useWeatherApi();

    const city = reactive<CityFetchData>({
      id: nextId++,
      name: cityName,
      isLoading: isLoading,
      error: error,
      data: forecast,
    });

    cities.value.push(city);

    await fetchForecastByCity(cityName);
  };

  return {
    cities,
    addCity
  };
}