import React from "react";
import "./forecast.css";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  console.log(forecastDays);
  //console.log("day: ", dayInWeek);

  return (
    <div className="container ">
      <div className="row">
        {data.list.splice(0, 6).map((item, index) => (
          <div className="card col-md-2 card-f" key={index}>
            <div className="card-body text-center">
              <div>
                <img
                  alt="icon"
                  className="weather-icon-f"
                  src={`icons/${item.weather[0].icon}.png`}
                />
              </div>
              <br />
              <h3>{Math.round(item.main.temp)}°C</h3>

              <h6>
                {forecastDays[index]}
                {/* {forecastDays[index].substring(0, 3)} */}
              </h6>

              {/* <div className="row">
                <div className="col-md-7">
                  <span className="badge rounded-pill text-bg-primary">
                    humidity
                  </span>
                </div>
                <div className="col-md-5">
                  <span className="badge rounded-pill text-bg-primary">
                    {Math.round(item.main.humidity)}
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
