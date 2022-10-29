import react from "react";

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lena-gatseva-375802202/"
            target="_blank"
          >
            Lena Gatseva
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/lenagatseva79/react-weather-app"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}