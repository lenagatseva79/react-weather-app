
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lena-gatseva-375802202/"
            target="_blank"
            rel="noreferrer"
          >
            Lena Gatseva
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/lenagatseva79/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}