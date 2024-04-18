

import './App.css'

import React from 'react';

import { useWeatherAPI } from './weather/weatherAPI';

const App = () => {
  const weather = useWeatherAPI();

  return (
    <div>
      {weather ? (
        <>
          <p>Tid: {weather.daytime}</p>
          <p>Temperatur: {weather.temperature}°C</p>
          <p>Luftfuktighet: {weather.humidity}%</p>
          <p>Vindstyrka: {weather.windSpeed} m/s</p>
          <p>Soluppgång: {weather.sunrise}</p>
          <p>Solnedgång: {weather.sunset}</p>
          <p>Land: {weather.country}</p>
          <p>Stad: {weather.city}</p>
        </>
      ) : (
        <p>Hämtar väderinformation...</p>
      )}
    </div>
  );
};

export default App;
