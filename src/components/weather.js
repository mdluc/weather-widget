import React from "react";
// import {Button } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
import moment from "moment";
import "./styles.css";
import {IoRefreshCircleOutline} from "react-icons/io5";

const refresh = () => {
  window.location.reload();
};



const Weather = ({ weatherData }) => {
  const imgUrl = `${process.env.REACT_APP_API_IMG+weatherData.weather[0].icon+".png"}`
  return(
    <div className="box">
    <div className="flex header">
      <p>{weatherData.name},  {moment().format("dddd")}, {moment().format("LL")}</p>
      <IoRefreshCircleOutline onClick={refresh} className="button"/>
    </div>

    <div className="flex-center day">
      <p className="weather">{weatherData.weather[0].description}</p>
      <img src={imgUrl} alt={weatherData.weather[0].description}/>
    </div>

    <div className="flex details">
    <p>Temperature: {weatherData.main.temp}&deg;C</p>
    <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
    <div className="flex details">
    <p>
      Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
    </p>
    <p>
      Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
    </p>
    </div>
  </div>
  );
  };

export default Weather;
