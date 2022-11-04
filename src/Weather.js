import react from "react";
import "./Weather.css";


export default function Weather() {
    return (
      <div className="Weather">
          <div className="row row-border">
            <div className="col-4 leftSide">
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
              <ul>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                  class="icon"
                  alt="Mostly cloudy"
                />
                <h1>15°C</h1>
                <li>Mostly cloudy</li>
                <li>Sunday 11:00</li>
                <li>📍Odesa</li>
              </ul>
            </div>
            <div className="col-8 rightSide">
              <h4>This weeks weather</h4>
              <h4>Today's highlights for city</h4>
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