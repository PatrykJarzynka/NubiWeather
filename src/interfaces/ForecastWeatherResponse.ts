import { CurrentWeatherResponse } from '@/interfaces/CurrentWeatherResponse.ts';
import { ConditionData } from '@/interfaces/ConditionData.ts';
import { WeatherData } from '@/interfaces/WeatherData.ts';

interface WeatherDataByDay {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: ConditionData;
  "uv": number;
}

interface AstrologyData {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

interface WeatherDataByHour extends WeatherData {
  time_epoch: number;
  time: string;
  snow_cm: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: WeatherDataByDay;
  astro: AstrologyData;
  hour: WeatherDataByHour[];
}

export interface ForecastWeatherResponse extends CurrentWeatherResponse {
  forecast: {
    forecastday: ForecastDay[];
  }
}