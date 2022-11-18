import React from "react"; 
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="01d" size={45}/>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-max">19°</span>
              <span className="WeatherForecast-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}