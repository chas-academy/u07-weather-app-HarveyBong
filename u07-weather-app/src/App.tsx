import { useWeatherAPI } from './weather/weatherAPI';
import { FiSunset } from "react-icons/fi";
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
function App() {
  const { weather, toggleUnit, unit } = useWeatherAPI();

  if (!weather || !unit) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className='flex flex-col items-center justify-center'>
      <div className='max-w-screen-md p-4 bg-gray-100 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-4'>Väderinformation för {weather.city}, {weather.country}</h1>
        <h2 className='text-xl'>Nuvarande temperatur: {weather.temperature}°{unit === 'metric' ? 'C' : 'F'}</h2>
        <button onClick={toggleUnit} className='mt-2 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          Toggle Unit
        </button><br></br>
        


        {unit}
        <h3 className='mt-6 text-lg'>Timme för timme prognos:</h3>
        <ul className='flex  gap-2  mt-2 overflow-x-scroll'>
          {weather.hourlyForecast.map((forecast, index) => (
            <li key={index} className='bg-white p-4 rounded-lg shadow flex flex-col items-center w-full px-5'>
              <div>{forecast.time}</div>
              <div>{forecast.icon}</div>
              <div>Vind: {weather.windSpeed} m/s</div>
              <div>{forecast.temperature}°{unit === 'metric' ? 'C' : 'F'}</div>
            </li>
          ))}
        </ul>
        
        <h3 className='mt-6 text-lg'>5-dagars prognos:</h3>
        <ul className='mt-2'>
          {weather.dailyForecast.map((forecast, index) => (
            <li key={index} className='bg-white p-4 rounded-lg shadow mb-4'>
              <div>Datum: {forecast.date}</div>
              <div>Temperatur: {forecast.temperature}°{unit === 'metric' ? 'C' : 'F'}</div>
              <div>Högsta temperatur: {forecast.hightemp}°{unit === 'metric' ? 'C' : 'F'}</div>
              <div>Vind: {weather.windSpeed} m/s</div>
              <div>Lägsta temperatur: {forecast.lowtemp}°{unit === 'metric' ? 'C' : 'F'}</div>
              <div>{weather.sunrise}</div>
              <div><FiSunset/> {weather.sunset}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
