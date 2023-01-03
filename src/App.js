//import logo from './logo.svg';
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { CURRENT_WEATHER_API_KEY, CURRENT_WEATHER_API_URL } from "./Api";
import { useState, useEffect } from "react";
import Forecast from "./components/forecast/forecast";
import Time from "./components/currenttime/time";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(",");
    const CurrentWeatherFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );
    const CurrentForecastFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );
    Promise.all([CurrentWeatherFetch, CurrentForecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes }); //extending the ciy attr from result
        setCurrentForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => {
        //use toastify
        console.log(err);
      });
    //console.log(searchData);
  };
  console.log(currentWeather);
  console.log(currentForecast);

  return (
    <div className="container">
      <Search OnSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <Time />
      {currentForecast && <Forecast data={currentForecast} />}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
