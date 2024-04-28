import { useEffect } from "react";
import { create } from 'zustand';
import { useGeolocation } from "../geolocation/useGeolocation";

const useWeatherStore = create((set) => ({
  weather: null,
  unit: "metric", 
 
  
  fetchWeather: async (location: string, unit: string, APIKEY: string) => {
  
    
    if (location) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=${unit}&appid=${APIKEY}`
        );
        const data = await response.json();
        
        const mapDescriptionToIcon = (description) => {
          switch (description) {
            case 'clear sky':
              return '☀️';
            case 'few clouds':
              return '🌤️';
            case 'scattered clouds':
              return '⛅';
            case 'broken clouds':
                return'☁️';
            case 'overcast clouds':
              return '🌥️';
            case 'shower rain':
                return '🌧️';
            case 'light rain':
                return '🌧️';
            case 'rain':
              return '🌧️';
              case 'moderate rain':
              return '🌧️';
            case 'thunderstorm':
              return '⛈️';
            case 'snow':
                return '❄️'; 
            case 'light snow':
              return '❄️';
            case 'mist':
              return '🌫️';
            default:
              return '';
          }
        };

        const hourlyForecast = data.list.map(item => ({
          time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', hour12: false }),
          temperature: item.main.temp,
          icon: mapDescriptionToIcon(item.weather[0].description),
        }));

        const dailyForecast = data.list.reduce((acc, item) => {
          const date = new Date(item.dt * 1000).toLocaleDateString();
          const existingDay = acc.find(day => day.date === date);

          if (!existingDay) {
            acc.push({
              date,
              temperatures: [item.main.temp],
            });
          } else {
            existingDay.temperatures.push(item.main.temp);
          }

          return acc;
        }, []).map(day => ({
          humid: day.humidity,
          date: day.date,
          temperature: Math.round(day.temperatures.reduce((total, temp) => total + temp, 0) / day.temperatures.length),
          hightemp: Math.max(...day.temperatures),
          lowtemp: Math.min(...day.temperatures),
          dt_text: data.list.find(item => new Date(item.dt * 1000).toLocaleDateString() === day.date).dt_txt,
        }));

        set({
          weather: {

            descript: data.list[0].weather[0].description,
            dt_text: data.list[0].dt_txt,
            daytime: new Date(data.list[0].dt * 1000).toLocaleTimeString(),
            temperature: data.list[0].main.temp,
            humidity: data.list[0].main.humidity,
            windSpeed: data.list[0].wind.speed,
            country: data.city.country,
            city: data.city.name,
            humid: data.list[0].main.humidity,
            hightemp: data.list[0].main.temp_max,
            lowtemp: data.list[0].main.temp_min,
            sunrise: new Date(data.city.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.city.sunset * 1000).toLocaleTimeString(),
            hourlyForecast,
            dailyForecast,
          },
          unit: unit,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  },
}));

export const useWeatherAPI = () => {
  const location = useGeolocation();
 
  const { fetchWeather, weather, unit } = useWeatherStore(); 

  /*const APIKEYY = "f40a3b64b79561a673ecd41e062044ac";*/
  const APIKEY = import.meta.env.VITE_API_WEATHER_KEY;

  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    
    fetchWeather(location, newUnit, APIKEY);
  };

  useEffect(() => {
    
    fetchWeather(location, unit, APIKEY);
  }, [fetchWeather, location, unit, APIKEY]);

  return { weather, toggleUnit, unit,}; 
};