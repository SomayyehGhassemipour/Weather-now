import './App.css';
import CurrentWeatherBox from './components/current weather/CurrentWeatherBox';
import Search from './components/search box/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import { useState } from 'react';

function App() {

  const [currentWeather, seCurrentWeather] = useState(null);
  const [Forecast, setForecast] = useState(null);

  const HandleonSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        seCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error))
  }

  console.log(currentWeather);
  console.log(Forecast);

  return (
    <div className="container">
      <Search onSearchChange={HandleonSearchChange} />
      {currentWeather && <CurrentWeatherBox data={currentWeather} />}
    </div>
  );
}

export default App;
