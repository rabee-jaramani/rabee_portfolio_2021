import axios from "axios";
import { makeDataNice } from "./makeDataNice";
const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

//first function to get the woeid
const getWoeid = async (attr) => {
  const { data } = await axios(`${REQUEST_URL}/search`, {
    params: { query: attr.location },
  });

  if (!data || data.length === 0) {
    return 0;
  }
  //woeid is the id for the city so we can us it to grap the weather data
  attr.setIsError(false);
  return data;
};

// second function to get the data
const getForecastData = async (woeid, attr) => {
  const { data } = await axios(`${REQUEST_URL}/${woeid}`);
  if (!data || data.length === 0) {
    return 0;
  }
  attr.setIsError(false);
  return data;
};

//third function to call first and second function
const submitRequest = async (attr) => {
  attr.setForecast(null);
  attr.setIsLoading(true);
  attr.setIsError(false);
  // first call
  const response = await getWoeid(attr);
  if (response !== 0) {
    const data = await getForecastData(response[0].woeid, attr);
    if (data === 0) {
      attr.setIsError("Somthing went wrong");
      return 0;
    }
    // we got the data
    console.log("date is ", data.consolidated_weather);
    //call makeDataNice function to give it to the dom components

    var readyData = makeDataNice(data);
    console.log("fine date is ", readyData);

    attr.setIsLoading(false);
    attr.setForecast(readyData);
  } else {
    attr.setIsError("There is no such location in our database.");
    attr.setIsLoading(false);
    console.log(
      "no such location please check the map https://www.metaweather.com/map/"
    );
  }
};
export const setData = (
  location,
  isError,
  setIsError,
  isLoading,
  setIsLoading,
  forecast,
  setForecast,
  city,
  setCity
) => {
  const attr = {
    location,
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    forecast,
    setForecast,
    city,
    setCity,
  };
  submitRequest(attr);
};
