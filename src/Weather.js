import react from "react";
import "./Weather.css";


export default function Weather() {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-4">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
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
            <h1>Odesa</h1>
            <ul>
              <img
                src="images/cloud.png"
                alt="Mostly cloudy"
              />
              <li>15°C</li>
              <li>Mostly cloudy</li>
              <li>Sunday 11:00</li>
            </ul>
          </div>
          <div className="col-8">
            <h4>This weeks weather</h4>
            <h4>Today's highlights</h4>
            <ul>
              <li>Sunrise</li>
              <li>Sunset</li>
              <li>Feels like</li>
              <li>Humidity</li>
              <li>Wind Speed</li>
              <li>Visibility</li>
            </ul>
          </div>
        </div>
      </div>
    );   
} 