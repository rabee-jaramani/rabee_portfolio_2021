const weekDaysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekDaysShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsNames = [
  "none",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const status_icon_list = [
  {
    status: "Snow",
    link: "https://www.metaweather.com/static/img/weather/sn.svg",
  },
  {
    status: "Sleet",
    link: "https://www.metaweather.com/static/img/weather/sl.svg",
  },
  {
    status: "Hail",
    link: "https://www.metaweather.com/static/img/weather/h.svg",
  },
  {
    status: "Thunderstorm",
    link: "https://www.metaweather.com/static/img/weather/t.svg",
  },
  {
    status: "Heavy Rain",
    link: "https://www.metaweather.com/static/img/weather/hr.svg",
  },
  {
    status: "Light Rain",
    link: "https://www.metaweather.com/static/img/weather/lr.svg",
  },
  {
    status: "Showers",
    link: "https://www.metaweather.com/static/img/weather/s.svg",
  },
  {
    status: "Heavy Cloud",
    link: "https://www.metaweather.com/static/img/weather/hc.svg",
  },
  {
    status: "Light Cloud",
    link: "https://www.metaweather.com/static/img/weather/lc.svg",
  },
  {
    status: "Clear",
    link: "https://www.metaweather.com/static/img/weather/c.svg",
  },
];

export const makeDataNice = (forecastData) => {
  var currentDayInfo = {
    fullDayName: "",
    monthDay: "",
    city: "",
    temp: "",
    dayStatus: "",
    statusIconLink: "",
    predictability: "",
    humidity: "",
    wind: "",
    airPressure: "",
    maxTemp: "",
    minTemp: "",
  };
  var restFiveDaysInfo = [
    {
      dayStatus: "",
      statusIconLink: "",
      dayShortName: "",
      temp: "",
    },
    {
      dayStatus: "",
      statusIconLink: "",
      dayShortName: "",
      temp: "",
    },
    {
      dayStatus: "",
      statusIconLink: "",
      dayShortName: "",
      temp: "",
    },
    {
      dayStatus: "",
      statusIconLink: "",
      dayShortName: "",
      temp: "",
    },
    {
      dayStatus: "",
      statusIconLink: "",
      dayShortName: "",
      temp: "",
    },
  ];
  var dataObject = {
    city: forecastData.title,
    currentDayData: forecastData.consolidated_weather[0],
    restFivedaysData: forecastData.consolidated_weather.slice(
      1,
      forecastData.consolidated_weather.length
    ),
  };
  //set the values for current day
  currentDayInfo.fullDayName = getFullDayName(
    dataObject.currentDayData.applicable_date
  );
  currentDayInfo.monthDay = getMonthandDay(
    dataObject.currentDayData.applicable_date
  );
  currentDayInfo.city = dataObject.city;
  currentDayInfo.temp = Math.round(dataObject.currentDayData.the_temp) + " °C";
  currentDayInfo.dayStatus = dataObject.currentDayData.weather_state_name;
  currentDayInfo.statusIconLink = getStatusIcon(
    dataObject.currentDayData.weather_state_name
  );
  currentDayInfo.predictability =
    dataObject.currentDayData.predictability + " %";
  currentDayInfo.humidity = dataObject.currentDayData.humidity + " %";
  currentDayInfo.wind =
    Math.round(dataObject.currentDayData.wind_speed) + " km/h";
  currentDayInfo.airPressure =
    Math.round(dataObject.currentDayData.air_pressure) + " mb";
  currentDayInfo.maxTemp =
    Math.round(dataObject.currentDayData.max_temp) + " °C";
  currentDayInfo.minTemp =
    Math.round(dataObject.currentDayData.min_temp) + " °C";

  // currentDayInfo.statusIconLink = getStatusIcon(dataObject.currentDayData.weather_state_name);
  //   set the rest days
  for (let i = 0; i < dataObject.restFivedaysData.length; i++) {
    restFiveDaysInfo[i].dayStatus =
      dataObject.restFivedaysData[i].weather_state_name;
    restFiveDaysInfo[i].statusIconLink = getStatusIcon(
      dataObject.restFivedaysData[i].weather_state_name
    );
    restFiveDaysInfo[i].dayShortName = getShortDayName(
      dataObject.restFivedaysData[i].applicable_date
    );
    restFiveDaysInfo[i].temp = Math.round(
      dataObject.restFivedaysData[i].the_temp
    );
  }
  // return final result
  return { currentDayInfo, restFiveDaysInfo };
};
const getFullDayName = (givenDate) => {
  //>givenDate is "2021-09-29"
  //>29
  var s = givenDate.slice(8);
  //>full system date
  var d = new Date();
  //> make sure the date same as we got it from the api
  d.setDate(s);
  // getDay gives the day number in the week (from 0 to 6- from monday to saturday)
  return weekDaysNames[d.getDay()];
};
const getShortDayName = (givenDate) => {
  var s = givenDate.slice(8);
  var d = new Date();
  d.setDate(s);
  return weekDaysShortNames[d.getDay()];
};

const getMonthandDay = (givenDate) => {
  // "2021-09-29"
  var month_number = givenDate.slice(5, 7);
  var day_number = givenDate.slice(8);
  var monthName = monthsNames[parseInt(month_number)];

  return monthName + " " + day_number;
};

const getStatusIcon = (status) => {
  for (let i = 0; i < status_icon_list.length; i++) {
    if (status_icon_list[i].status === status) {
      return status_icon_list[i].link;
    }
  }
};
