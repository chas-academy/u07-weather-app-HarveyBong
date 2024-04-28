export interface Weather {
  descript: string;
  dt_text: string;
  daytime: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  country: string;
  city: string;
  humid: number;
  hightemp: number;
  lowtemp: number;
  sunrise: string;
  sunset: string;
  hourlyForecast: any[]; // Define the type for hourlyForecast accordingly
  dailyForecast: any[]; // Define the type for dailyForecast accordingly
}

export interface WeatherStore {
  weather: Weather | null;
  unit: string;
  fetchWeather: (location: { latitude: number; longitude: number } | null, unit: string, APIKEY: string) => Promise<void>;
}