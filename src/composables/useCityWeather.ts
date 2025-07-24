import { ref, reactive } from 'vue';
import { useWeatherApi } from '@/services/useWeatherApi';
import { CityFetchData } from '@/interfaces/CityFetchData';
import { v4 as uuidv4 } from 'uuid';

export function useCityWeather() {
  const cities = ref<CityFetchData[]>([]);

  const addCity = async (cityName: string) => {
    if (cities.value.some(city => city.name.toLowerCase() === cityName.toLowerCase())) {
      console.warn(`City "${cityName}" already exists.`);
      return;
    }

    const { forecast, error, isLoading, fetchForecastByCity } = useWeatherApi();

    const city = reactive<CityFetchData>({
      id: uuidv4(),
      name: cityName,
      isLoading: isLoading,
      error: error,
      data: forecast,
      refetch: () => fetchForecastByCity(cityName)
    });

    cities.value.push(city);

    await fetchForecastByCity(cityName);
  };

  return {
    cities,
    addCity
  };
}