import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
      <div className="text-center higlights-borders shadow-sm">
        <div className="WeatherForecast-day fw-bold m-1">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={45} className="" />
        <div className="WeatherForecast-temp mt-2 mb-1">
          <span className="WeatherForecast-max">{maxTemperature()}</span>
          <span className="WeatherForecast-min">{minTemperature()}</span>
        </div>
      </div>
    );
}