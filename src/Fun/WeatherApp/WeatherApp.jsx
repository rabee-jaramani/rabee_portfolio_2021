import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import axios from "axios";
const WeatherApp = () => {
  const BASE_URL = "https://www.metaweather.com/api/location";
  const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
  const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");

  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });

    if (!data || data.length === 0) {
      return 0;
    }
    //woeid is the id for the city so we can us it to grap the weather data
    setIsError(false);
    return data;
  };
  const getForecastData = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);
    if (!data || data.length === 0) {
      return 0;
    }
    setIsError(false);
    return data;
  };
  const submitRequest = async (location) => {
    setForecast(null);
    setIsLoading(true);
    setIsError(false);
    // first call
    const response = await getWoeid(location);
    if (response !== 0) {
      const data = await getForecastData(response[0].woeid);
      if (data === 0) {
        setIsError("Somthing went wrong");
        return;
      }
      // we got the data
      console.log("Final data is: ", data);
      console.log(
        "date is ",
        data.consolidated_weather[0].applicable_date.getMonth()
      );
      setIsLoading(false);
      setForecast(data);
    } else {
      setIsError("There is no such location");
      setIsLoading(false);
      console.log(
        "no such location please check the map https://www.metaweather.com/map/"
      );
    }
  };
  useEffect(() => {
    //   get the woeid
  });

  return (
    <div className="weather-cont">
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
            onClick={() => submitRequest(city)}
            disabled={isLoading || city.length < 3}
          >
            submit
          </button>
          <div className="error-message">{isError}</div>

          {isLoading ? <BounceLoader size={50} color={"#2FA8FF"} /> : ""}
          {/* </div> */}
        </div>

        {/* Card */}
        {forecast ? (
          <div className="forecast-card">
            <div className="trans-div">
              <div className="date-city-flex">
                <div className="day">Sunday</div>
                <div className="month">February</div>
                <div className="city">Damascus</div>
              </div>
              <div className="weather-status-flex">
                <div className="icon">icon</div>
                <div className="temp">90C</div>
                <div className="status">Hail</div>
              </div>
            </div>
            <div className="details-div">
              <div className="words-details">
                <div className="word ">
                  <div className="expr">predictability</div>
                  <div className="expr-num">82%</div>
                </div>
                <div className="word ">
                  <div className="expr">humidity</div>
                  <div className="expr-num">72%</div>
                </div>
                <div className="word ">
                  <div className="expr">wind</div>
                  <div className="expr-num">14km/h</div>
                </div>
                <div className="word ">
                  <div className="expr">pressure</div>
                  <div className="expr-num">1212.2 mb</div>
                </div>
                <div className="word ">
                  <div className="expr">max-temp</div>
                  <div className="expr-num">-4C</div>
                </div>
                <div className="word">
                  <div className="expr"> min-temp</div>
                  <div className="expr-num">-8C</div>
                </div>
              </div>

              {/* clouds flex */}
              <div className="clouds-flex">
                <div className="cloud">
                  <div className="icon">icon</div>
                  <div className="day">Mon</div>
                  <div className="temp">-7C</div>
                </div>
                <div className="cloud">
                  <div className="icon">icon</div>
                  <div className="day">Mon</div>
                  <div className="temp">-7C</div>
                </div>
                <div className="cloud">
                  <div className="icon">icon</div>
                  <div className="day">Mon</div>
                  <div className="temp">-7C</div>
                </div>
                <div className="cloud">
                  <div className="icon">icon</div>
                  <div className="day">Mon</div>
                  <div className="temp">-7C</div>
                </div>
                <div className="cloud">
                  <div className="icon">icon</div>
                  <div className="day">Mon</div>
                  <div className="temp">-7C</div>
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
