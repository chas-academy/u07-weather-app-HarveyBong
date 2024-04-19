

import './App.css'
import { TiWeatherCloudy } from "react-icons/ti";
import React from 'react';

import { useWeatherAPI } from './weather/weatherAPI';

const App = () => {
  const weather = useWeatherAPI();

  return (
    <div className="content-center text-center my-10 justify-center">
      {weather ? (
        <>
        <div className="container mx-auto pb-10">
        <p>Min plats</p>
        <p>{weather.city}, {weather.country} </p>
        <h2 className="text-4xl">{weather.temperature}°C</h2>
        <p>{weather.descript}</p>
        <p>H: {weather.hightemp}°C L: {weather.lowtemp}°C</p>
        </div>
        

        
        <p>data_text: {weather.dt_text}</p>
          <p>Tid: {weather.daytime}</p>
          
          <p>Luftfuktighet: {weather.humidity}%</p>
          <p>Vindstyrka: {weather.windSpeed} m/s</p>
          <p>Soluppgång: {weather.sunrise}</p>
          <p>Solnedgång: {weather.sunset}</p>

          
          
          
          
        </>
      ) : (
        <p>Hämtar väderinformation...</p>
      )}
    </div>
  );
};

export default App;
