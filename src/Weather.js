import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import axios from "axios";


export default function Weather(props) {
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
      iconUrl:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row row-border">
            <div className="col-4 leftSide">
              <form>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city.."
                      className="form-control"
                      autoFocus="on"
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
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                  class="icon"
                  alt="Mostly cloudy"
                />
                <br />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
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
              <h5 className="fw-bold fs-3">Today's highlights for city</h5>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <ul className="text-center">
                      <li className="higlightsName">Sunrise</li>
                      <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                        class="highlights"
                        alt="Mostly cloudy"
                      />
                      <li>
                        <FormattedTime date ={weatherData.sunrise} />
                      </li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul className="text-center">
                      <li className="higlightsName">Sunset</li>
                      <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                        class="highlights"
                        alt="Mostly cloudy"
                      />
                      <li>
                        <FormattedTime date ={weatherData.sunset} />
                      </li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul className="text-center">
                      <li className="higlightsName">Feels like</li>
                      <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                        class="highlights"
                        alt="Mostly cloudy"
                      />
                      <li>{Math.round(weatherData.feelsLike)}°C</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <ul className="text-center">
                      <li className="higlightsName">Humidity</li>
                      <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                        class="highlights"
                        alt="Mostly cloudy"
                      />
                      <li>{weatherData.humidity}%</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul className="text-center">
                      <li className="higlightsName">Wind Speed</li>
                      <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                        class="highlights"
                        alt="Mostly cloudy"
                      />
                      <li>{weatherData.wind} km/h</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul className="text-center">
                      <li className="higlightsName">Visibility</li>
                      <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                        class="highlights"
                        alt="Mostly cloudy"
                      />
                      <li>{weatherData.visibility} km</li>
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
     const apiKey = "4fa2fa98e001adffeee9f1033c8280d7";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);

     return "Loading...";
  }   
} 