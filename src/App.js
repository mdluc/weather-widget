import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";

export default function App() {
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [lat, setLat] = useState([]);

  const url = `${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    fetchData();
  }, [lat, long]);

  return (
    <div className="main">
      {(typeof data.main != 'undefined')?<Weather weatherData={data}/>:<div>Please turn on your location...</div>}
    </div>
  );
}
