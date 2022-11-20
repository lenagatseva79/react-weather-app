import React, { useState } from "react"; 
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false); 
    let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
     return (
       <div className="WeatherForecast">
         <div className="row">
           <div className="col">
             <div className="WeatherForecast-day">Thursday</div>
             <WeatherIcon code="01d" size={45} />
             <div className="WeatherForecast-temp">
               <span className="WeatherForecast-max">
                 {forecast[0].temp.max}°
               </span>
               <span className="WeatherForecast-min">10°</span>
             </div>
           </div>
         </div>
       </div>
     );
    } else {
       const apiKey = "4fa2fa98e001adffeee9f1033c8280d7";
       let longitude = props.coordinates.lon;
       let latitude = props.coordinates.lat;
       let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}}&appid=${apiKey}&units=metric`;

       axios.get(apiUrl).then(handleResponse);

       return null;
    }
    }
   
