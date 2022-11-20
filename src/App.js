import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Odesa" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lena-gatseva-375802202/"
            target="_blank"
            rel="noreferrer"
          >
            Lena Gatseva
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/lenagatseva79/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}