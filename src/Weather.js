import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      wind: response.data.wind.speed,
      visibility: response.data.visibility / 1000,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  
  function search() {
    const apiKey = "4fa2fa98e001adffeee9f1033c8280d7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmite(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row row-border">
            <div className="col-4 leftSide">
              <form onSubmit={handleSubmite}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city.."
                      className="form-control"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
              <ul className="leftSide">
                <WeatherIcon code={weatherData.icon} size={150}/>
                <br />
                <WeatherTemperature celsius={weatherData.temperature} />
                <li className="description text-capitalize">
                  {weatherData.description}
                </li>
                <li className="currentTime">
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="searchedCity">📍{weatherData.city}</li>
              </ul>
            </div>
            <div className="col-8 rightSide">
              <h4 className="fw-bold fs-3">This weeks weather</h4>
              <WeatherForecast />
              <h5 className="fw-bold fs-3">
                Today's highlights for {weatherData.city}
              </h5>
              <div className="container">
                <div className="row">
                  <div className="col-4 p-1">
                    <ul className="text-center higlights-borders shadow-sm ">
                      <li className="higlightsName">Sunrise</li>
                      <img
                        src={require("./images/sunrise.png")}
                        class="highlights"
                        alt="Sunrise"
                      />
                      <li className="higlights-description">
                        <FormattedTime date={weatherData.sunrise} />
                      </li>
                    </ul>
                  </div>
                  <div className="col-4 p-1">
                    <ul className="text-center higlights-borders shadow-sm">
                      <li className="higlightsName">Sunset</li>
                      <img
                        src={require("./images/sunset.png")}
                        class="highlights"
                        alt="Sunset"
                      />
                      <li className="higlights-description">
                        <FormattedTime date={weatherData.sunset} />
                      </li>
                    </ul>
                  </div>
                  <div className="col-4 p-1">
                    <ul className="text-center higlights-borders shadow-sm">
                      <li className="higlightsName">Feels like</li>
                      <img
                        src={require("./images/feelslike.png")}
                        class="highlights"
                        alt="Feels like"
                      />
                      <li className="higlights-description">
                        {Math.round(weatherData.feelsLike)}°C
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 p-1">
                    <ul className="text-center higlights-borders shadow-sm">
                      <li className="higlightsName">Humidity</li>
                      <img
                        src={require("./images/humidity.png")}
                        class="highlights"
                        alt="Humidity"
                      />
                      <li className="higlights-description">
                        {weatherData.humidity}%
                      </li>
                    </ul>
                  </div>
                  <div className="col-4 p-1">
                    <ul className="text-center higlights-borders shadow-sm">
                      <li className="higlightsName">Wind Speed</li>
                      <img
                        src={require("./images/windy.png")}
                        class="highlights"
                        alt="Wind speed"
                      />
                      <li className="higlights-description">
                        {weatherData.wind} km/h
                      </li>
                    </ul>
                  </div>
                  <div className="col-4 p-1">
                    <ul className="text-center higlights-borders shadow-sm">
                      <li className="higlightsName">Visibility</li>
                      <img
                        src={require("./images/visibility.png")}
                        class="highlights"
                        alt="Visibility"
                      />
                      <li className="higlights-description">
                        {weatherData.visibility} km
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  } else {
    search();
     return "Loading...";
  }   
} 