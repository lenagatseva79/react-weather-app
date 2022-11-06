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
                <br/>
                <span className="temperature">15</span>
                <span className="unit">°C</span>
                <li>Mostly cloudy</li>
                <li>Sunday 11:00</li>
                <li>📍Odesa</li>
              </ul>
            </div>
            <div className="col-8 rightSide">
              <h4>This weeks weather</h4>
              <h5>Today's highlights for city</h5>
              <div className="container">
                <div className="row">
                  <div className="col-4">Sunrise</div>
                  <div className="col-4">Sunset</div>
                  <div className="col-4">Feels like</div>
                </div>
                <div className="row">
                  <div className="col-4">Humidity</div>
                  <div className="col-4">Wind Speed</div>
                  <div className="col-4">Visibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );   
} 