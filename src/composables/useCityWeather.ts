import { ref, reactive, Reactive } from 'vue';
import { useWeatherApi } from '@/services/useWeatherApi';
import { CityFetchData } from '@/interfaces/CityFetchData';
import { v4 as uuidv4 } from 'uuid';

export function useCityWeather() {
  const cities = ref<CityFetchData[]>([]);

  function createCityObject(cityName: string): Reactive<CityFetchData> {
    const { forecast, error, isLoading, fetchForecastByCity } = useWeatherApi();

    return reactive<CityFetchData>({
      id: uuidv4(),
      name: cityName,
      isLoading,
      error,
      data: forecast,
      refetch: () => fetchForecastByCity(cityName)
    });
  }


  const addCity = async (cityName: string): Promise<void> => {
    const city = createCityObject(cityName);
    cities.value.push(city);
    await city.refetch()
  }


  return {
    cities,
    addCity
  };
}