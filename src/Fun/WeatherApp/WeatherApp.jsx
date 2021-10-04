import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BounceLoader } from "react-spinners";
import { setData } from "./setData";
// import axios from "axios";
const WeatherApp = () => {
  const history = useHistory();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    // console.log(forecast);
  });

  return (
    <div className="weather-cont">
      <div className="bacck" onClick={() => history.push("/fun")}>
        <i className="fas fa-arrow-circle-left"></i>
      </div>
      <h1 className="title">Weather App</h1>
      <div className="forecast-cont">
        <div className="search-div">
          <input
            id="city_input"
            name="city_input"
            type="text"
            className="city-input"
            placeholder="City..."
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            className="city-search-btn"
            onClick={() =>
              setData(
                city,
                isError,
                setIsError,
                isLoading,
                setIsLoading,
                forecast,
                setForecast,
                city,
                setCity
              )
            }
            disabled={isLoading || city.length < 3}
          >
            submit
          </button>
          {isError ? (
            <>
              <div className="error-message">{isError}</div>
              <a
                className="checkmap"
                target="_blank"
                href="https://www.metaweather.com/map/"
                rel="noreferrer"
              >
                {" "}
                Please check the map{" "}
              </a>
            </>
          ) : (
            ""
          )}

          {isLoading ? <BounceLoader size={50} color={"#2FA8FF"} /> : ""}
          {/* </div> */}
        </div>

        {/* Card */}
        {forecast ? (
          <div className="forecast-card">
            <div className="trans-div">
              <div className="date-city-flex">
                <div className="day">{forecast.currentDayInfo.fullDayName}</div>
                <div className="month">{forecast.currentDayInfo.monthDay}</div>
                <div className="city">{forecast.currentDayInfo.city}</div>
              </div>
              <div className="weather-status-flex">
                <img
                  alt={forecast.currentDayInfo.dayStatus}
                  style={{ width: "32px" }}
                  src={forecast.currentDayInfo.statusIconLink}
                />
                <div className="temp">{forecast.currentDayInfo.temp}</div>
                <div className="status">
                  {forecast.currentDayInfo.dayStatus}
                </div>
              </div>
            </div>
            <div className="details-div">
              <div className="words-details">
                <div className="word ">
                  <div className="expr">predictability</div>
                  <div className="expr-num">
                    {forecast.currentDayInfo.predictability}
                  </div>
                </div>
                <div className="word ">
                  <div className="expr">humidity</div>
                  <div className="expr-num">
                    {" "}
                    {forecast.currentDayInfo.humidity}
                  </div>
                </div>
                <div className="word ">
                  <div className="expr">wind</div>
                  <div className="expr-num">
                    {" "}
                    {forecast.currentDayInfo.wind}
                  </div>
                </div>
                <div className="word ">
                  <div className="expr">pressure</div>
                  <div className="expr-num">
                    {" "}
                    {forecast.currentDayInfo.airPressure}
                  </div>
                </div>
                <div className="word ">
                  <div className="expr">max-temp</div>
                  <div className="expr-num">
                    {" "}
                    {forecast.currentDayInfo.maxTemp}
                  </div>
                </div>
                <div className="word">
                  <div className="expr"> min-temp</div>
                  <div className="expr-num">
                    {" "}
                    {forecast.currentDayInfo.minTemp}
                  </div>
                </div>
              </div>

              {/* clouds flex */}
              <div className="clouds-flex">
                <div className="cloud">
                  <div className="icon">
                    <img
                      alt={forecast.restFiveDaysInfo[0].dayStatus}
                      style={{ width: "32px" }}
                      src={forecast.restFiveDaysInfo[0].statusIconLink}
                    />
                  </div>
                  <div className="day">
                    {forecast.restFiveDaysInfo[0].dayShortName}
                  </div>
                  <div className="temp">
                    {forecast.restFiveDaysInfo[0].temp}
                  </div>
                </div>
                <div className="cloud">
                  <div className="icon">
                    <img
                      alt={forecast.restFiveDaysInfo[1].dayStatus}
                      style={{ width: "32px" }}
                      src={forecast.restFiveDaysInfo[1].statusIconLink}
                    />
                  </div>
                  <div className="day">
                    {forecast.restFiveDaysInfo[1].dayShortName}
                  </div>
                  <div className="temp">
                    {forecast.restFiveDaysInfo[1].temp}
                  </div>
                </div>
                <div className="cloud">
                  <div className="icon">
                    <img
                      alt={forecast.restFiveDaysInfo[2].dayStatus}
                      style={{ width: "32px" }}
                      src={forecast.restFiveDaysInfo[2].statusIconLink}
                    />
                  </div>
                  <div className="day">
                    {forecast.restFiveDaysInfo[2].dayShortName}
                  </div>
                  <div className="temp">
                    {forecast.restFiveDaysInfo[2].temp}
                  </div>
                </div>
                <div className="cloud">
                  <div className="icon">
                    <img
                      alt={forecast.restFiveDaysInfo[3].dayStatus}
                      style={{ width: "32px" }}
                      src={forecast.restFiveDaysInfo[3].statusIconLink}
                    />
                  </div>
                  <div className="day">
                    {forecast.restFiveDaysInfo[3].dayShortName}
                  </div>
                  <div className="temp">
                    {forecast.restFiveDaysInfo[3].temp}
                  </div>
                </div>
                <div className="cloud">
                  <div className="icon">
                    <img
                      alt={forecast.restFiveDaysInfo[4].dayStatus}
                      style={{ width: "32px" }}
                      src={forecast.restFiveDaysInfo[4].statusIconLink}
                    />
                  </div>
                  <div className="day">
                    {forecast.restFiveDaysInfo[4].dayShortName}
                  </div>
                  <div className="temp">
                    {forecast.restFiveDaysInfo[4].temp}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
