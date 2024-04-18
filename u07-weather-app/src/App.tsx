

import './App.css'

import React from 'react';

import { useWeatherAPI } from './weather/weatherAPI';

const App = () => {
  const weather = useWeatherAPI();

  return (
    <div>
      {weather ? (
        <>
        <p>Min plats</p>
        <p>{weather.city}</p>
        <p>Land: {weather.country}</p>

        <p>{weather.descript}</p>

        <h2 className="text-4xl">{weather.temperature}°C</h2>
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
