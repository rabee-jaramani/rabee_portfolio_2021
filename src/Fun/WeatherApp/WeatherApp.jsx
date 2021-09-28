import React, { useEffect, useState } from "react";
import axios from "axios";
const WeatherApp = () => {
  const BASE_URL = "https://www.metaweather.com/api/location";
  const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
  const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
  const [isError, setIsError] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [forecast, setForecast] = useState(null);

  const submitRequest = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });

    if (!data || data.length === 0) {
      // set an error
      setIsError("There is no such location");
      console.log(isError);
      return;
    } else {
      //woeid is the id for the city so we can us it to grap the weather data
      console.log("where on earth id for " + location + ": " + data[0].woeid);
      //call second api to get the weather for location
      const response = await axios(`${REQUEST_URL}/${data[0].woeid}`);
      console.log("the weather data : ", response);
    }
  };
  useEffect(() => {
    submitRequest("london");
  });

  return <div>Weather</div>;
};

export default WeatherApp;
