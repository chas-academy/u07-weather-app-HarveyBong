
import { useWeatherAPI } from './weather/weatherAPI';
import { FiSunset } from "react-icons/fi";
function App() {
  const { weather, toggleUnit, unit } = useWeatherAPI();

  
  if (!weather||!unit) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='md:max-w-full p-4 bg-gray-100 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold'>Väderinformation för {weather.city}, {weather.country}</h1>
        <h2 className='mt-2 text-xl'>Nuvarande temperatur: {weather.temperature}°{unit === 'metric' ? 'C' : 'F'}</h2>
        <button onClick={toggleUnit} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          {unit}
        </button>
       
        
        <h3 className='mt-4'>Timme för timme prognos:</h3>
        <ul className='flex  gap-1 mt-2  overflow-x-auto scrollbar-thin scrollbar-webkit py-2 '>
          {weather.hourlyForecast.map((forecast, index) => (
            <li key={index} className='bg-white p-2 rounded-lg shadow px-10'>
              <div className='text-center'>{forecast.time}</div>
              <div className='text-center'>{forecast.icon}</div>
              <div>Vind: {weather.windSpeed} m/s</div>
              <div className='text-center'>{forecast.temperature}°{unit === 'metric' ? 'C' : 'F'}</div>
            </li>
          ))}
        </ul>
        
        <h3 className='mt-4'>5-dagars prognos:</h3>
        <ul className='mt-2'>
          {weather.dailyForecast.map((forecast, index) => (
            <li key={index} className='bg-white p-2 rounded-lg shadow mb-2'>
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
