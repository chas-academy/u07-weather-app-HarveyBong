import { useWeatherAPI } from "./weather/weatherAPI";
import { FiSunset } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";
import { FaWind } from "react-icons/fa6";

function App() {
  const { weather, toggleUnit, unit } = useWeatherAPI();

  if (!weather || !unit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center text-white bg-columbiablue py-10 ">
      <div className="max-w-screen-md w-full md:w-auto p-4 bg-superiorityblue rounded-lg shadow-lg">
        <div>
          <button
            alt="toggle unit"
            onClick={toggleUnit}
            className="mt-2 bg-columbialightblue hover:bg-columbiablue font-semibold py-2 px-4 border border-gray-400 rounded shadow ">
            °{unit === "metric" ? "C" : "F"}
          </button>
        </div>
        
        <div className="text-center items-center">
          <h1>Min Plats</h1>
          <h2 className="text-3xl font-bold mb-2 ">
            {weather.city}, {weather.country}
          </h2>
          <h2 className="text-2xl">
            {weather.temperature}°{unit === "metric" ? "C" : "F"}
            
          </h2>
          <h3>
            H:{weather.hightemp} L:{weather.lowtemp}
          </h3>
          <h3>{weather.descript}</h3>
          <h3>{weather.windSpeed}m/s</h3>
          
          <h3>Luftfuktighet: {weather.humid}%</h3>
          
        </div>
        <h3 className="mt-6 text-lg">Timme för timme prognos:</h3>
        <ul className="flex  gap-2 mt-2  overflow-x-auto shadow-inner  rounded-lg p-5">
          {weather.hourlyForecast.map((forecast, index) => (
            <li
              key={index}
              className="bg-columbialightblue hover:bg-columbiablue text-onyx  p-4 rounded-lg shadow flex flex-col items-center min-w-32 md:w-auto "
            >
              <div>{forecast.time}</div>
              <div>{forecast.icon}</div>
              <div>
                {forecast.temperature}°{unit === "metric" ? "C" : "F"}
              </div>
              <div className="flex items-center">
                <div>
                <FaWind />
                </div>
                <div className="mx-2">  {weather.windSpeed} m/s</div>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-6 text-lg">5-dagars prognos:</h3>
        <ul className="mt-2 overflow-y-auto ">
          {weather.dailyForecast.map((forecast, index) => (
            <li
              key={index}
              className="bg-columbialightblue text-onyx hover:bg-columbiablue p-4 rounded-lg shadow mb-4"
            >
              <div className="text-xl font-bold">Datum: {forecast.date}</div>
              <div>
                Temperatur: {forecast.temperature}°
                {unit === "metric" ? "C" : "F"}
              </div>
              <div>
                Högsta temperatur: {forecast.hightemp}°
                {unit === "metric" ? "C" : "F"}
              </div>
              <div>
                Lägsta temperatur: {forecast.lowtemp}°
                {unit === "metric" ? "C" : "F"}
              </div>
              <div className="flex items-center">
                <div>
                <FaWind />
                </div>
                <div className="mx-2">  {weather.windSpeed} m/s</div>
              </div>
              <div className="flex items-center">
                <div>
                  <FiSunrise />
                </div>
                <div className="mx-2"> {weather.sunrise}</div>
              </div>
              <div className="flex items-center">
                <div>
                  <FiSunset />
                </div>
                <div className="mx-2">{weather.sunset}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
