import React from 'react';
import { useWeatherAPI } from './weather/weatherAPI';

function App() {
  const weather = useWeatherAPI();

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center'>
  <div className='max-w-md p-4 bg-gray-100 rounded-lg shadow-lg'>
    <h1 className='text-3xl font-bold'>Väderinformation för {weather.city}, {weather.country}</h1>
    <h2 className='mt-2 text-xl'>Nuvarande temperatur: {weather.temperature}°C</h2>
      
    <h3 className='mt-4'>Timme för timme prognos:</h3>
    <ul className='flex  gap-1 mt-2 overflow-scroll  h-fit rounded-lg scrollbar-thin scrollbar-webkit'>
      {weather.hourlyForecast.map((forecast, index) => (
        <li key={index} className='bg-white p-2 rounded-lg shadow w-15'>
          <div className='text-center'>{forecast.time}</div>
          <div className='text-center'>{forecast.icon}</div>
          <div className='text-center'>{forecast.temperature}°</div>
        </li>
      ))}
    </ul>
    
    <h3 className='mt-4'>5-dagars prognos:</h3>
    <ul className='mt-2'>
      {weather.dailyForecast.map((forecast, index) => (
        <li key={index} className='bg-white p-2 rounded-lg shadow mb-2'>
          <div>Datum: {forecast.date}</div>
          <div>Temperatur: {forecast.temperature}°C</div>
          <div>Högsta temperatur: {forecast.hightemp}°C</div>
          <div>Lägsta temperatur: {forecast.lowtemp}°C</div>
        </li>
      ))}
    </ul>
  </div>
</div>
  );
}

export default App;