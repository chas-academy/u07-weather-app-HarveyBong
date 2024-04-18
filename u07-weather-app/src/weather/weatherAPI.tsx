import { useEffect, useState } from "react";
import { useGeolocation } from "../geolocation/useGeolocation";

export const useWeatherAPI = () => {
  const location = useGeolocation();
  const [weather, setWeather] = useState(null);

  const APIKEY = "f40a3b64b79561a673ecd41e062044ac";
  const unit= "metric";
  useEffect(() => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=${unit}&appid=${APIKEY}`
      )
        .then((response) => response.json())
        .then((data) =>
          setWeather({
            descript: data.list[0].weather[0].description,
            dt_text: data.list[0].dt_txt,
            daytime: new Date(data.list[0].dt * 1000).toLocaleTimeString(),
            temperature: data.list[0].main.temp,
          humidity: data.list[0].main.humidity,
            windSpeed: data.list[0].wind.speed,
            country:data.city.country,
            city:data.city.name,
            sunrise: new Date(data.city.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.city.sunset * 1000).toLocaleTimeString(),
          })
        );
    }
  }, [location]); 
  return weather;
};
