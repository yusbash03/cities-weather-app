import "./current-weather.css";
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="card card-w">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 main col-sm-6">
              <h5 className="card-title">
                <img alt="icon" className="locIcon" src="location.png" />
                {data.city}
              </h5>
              <br />
              <h2 className="card-title degree">
                <img alt="icon" className="thermIcon" src="thermometer.png" />
                {Math.round(data.main.temp)}°C
              </h2>
              {/* <h6>max 20°C, min. 20°C</h6> */}
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="icon"
                className="weather-icon"
                src={`icons/${data.weather[0].icon}.png`}
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <h5 className="card-subtitle mb-2 ">
                {data.weather[0].description}
              </h5>
              <div className="row">
                <div className="col-lg-7 col-sm-3">
                  <h6>Feels Like</h6>
                </div>
                <div className="col-lg-5 col-sm-3">
                  <h6>{Math.round(data.main.feels_like)}°C</h6>
                </div>
                <div className="col-md-7 col-sm-6">
                  <h6>Wind</h6>
                </div>
                <div className="col-md-5 col-sm-6">
                  <h6>{Math.round(data.wind.speed)}m/s</h6>
                </div>
                <div className="col-md-7">
                  <h6>Humidity</h6>
                </div>
                <div className="col-md-5">
                  <h6>{Math.round(data.main.humidity)}%</h6>
                </div>

                <div className="col-md-7">
                  <h6>Pressure</h6>
                </div>
                <div className="col-md-5">
                  <h6> {Math.round(data.main.pressure)}</h6>
                </div>
              </div>
            </div>
          </div>
          {/* <h5 className="card-title">Weather</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
