import { WeatherData } from '@/interfaces/WeatherData.ts';

interface LocationData {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface CurrentData extends WeatherData {
  last_updated_epoch: number;
  last_updated: string;
}

export interface CurrentWeatherResponse {
  location: LocationData,
  current: CurrentData
}