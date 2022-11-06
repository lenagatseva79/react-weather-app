import "./Weather.css";


export default function Weather() {
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
                <span className="temperature">15</span>
                <span className="unit">°C</span>
                <li className="description">Mostly cloudy</li>
                <li className="currentTime">Sunday 11:00</li>
                <li className="searchedCity">📍Odesa</li>
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
                      <li>6:58</li>
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
                      <li>18:32</li>
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
                      <li>13°C</li>
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
                      <li>50%</li>
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
                      <li>13km/h</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul className="text-center">
                      <li className="higlightsName">Precipitation</li>
                      <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/051/513/original/cloudy.png?1667595985"
                        class="highlights"
                        alt="Mostly cloudy"
                      />
                      <li>17%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );   
} 