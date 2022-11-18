import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": require("./images/sun.png"),
    "01n": require("./images/moon.png"),
    "02d": require("./images/cloudy.png"),
    "02n": require("./images/clearnight.png"),
    "03d": require("./images/clouds.png"),
    "03n": require("./images/clouds.png"),
    "04d": require("./images/cloud.png"),
    "04n": require("./images/cloud.png"),
    "09d": require("./images/rainsunstorm.png"),
    "09n": require("./images/rainsunstorm.png"),
    "10d": require("./images/rain.png"),
    "10n": require("./images/rain.png"),
    "11d": require("./images/storm.png"),
    "11n": require("./images/storm.png"),
    "13d": require("./images/snow.png"),
    "13n": require("./images/snow.png"),
    "50d": require("./images/mist.png"),
    "50n": require("./images/mist.png"),
  };

  return (
    <img src={codeMapping[props.code]} alt={props.alt} width={props.size} />
  );
}