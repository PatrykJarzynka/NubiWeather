import { useFetch } from '@/composables/useFetch.ts';
import { ForecastWeatherResponse } from '@/interfaces/ForecastWeatherResponse.ts';

export function useWeatherApi() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = 'http://api.weatherapi.com/v1';

  const { data, error, isLoading, execute } = useFetch<ForecastWeatherResponse>()

  async function fetchForecastByCity(cityName: string, numberOfDays: number = 6) {
    await execute(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${cityName}&days=${numberOfDays}`)
  }

  return {
    fetchForecastByCity,
    forecast: data,
    error,
    isLoading,
  }
}