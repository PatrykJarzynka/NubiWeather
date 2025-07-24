import { Ref } from 'vue';
import { ForecastWeatherResponse } from '@/interfaces/ForecastWeatherResponse.ts';


export interface CityFetchData {
  id: string;
  name: string;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
  data: Ref<ForecastWeatherResponse | null>;
  refetch(): Promise<void>
}