import React, { useState, useEffect } from 'react';
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import './Styles/Weather.css'; // Create this CSS file to style the header

// const WEATHER_API_KEY = "6d755b05fabec6acb3cba65df652de9b";
const WEATHER_API = process.env.REACT_APP_WEATHER_API

const Header = () => {
  const [weather, setWeather] = useState({});
  const {location, error} = geoLocationHook();

  useEffect(() => {
    if(location){
      const lat = location.latitude;
      const long = location.longitude; 

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API}`)
        .then(response => response.json())
        .then(data => {
          let cTemp = data.main.temp;
          let currentTempInF = (cTemp * (9 / 5) )+ 32;
  
          setWeather({
            cityName: data.name, 
            weatherDescription: data.weather[0].description,
            currentTemp: currentTempInF.toFixed(0) + "\xB0F",
            icon: data.weather[0].icon
          })
        })
        .catch(err =>{
          console.error(err, "<---- error")
        }) 
    }
  }, [location]);

  return (
    <div className="weather">
      <div className="weather-box">
        <h2>Weather in {weather.cityName}</h2>
        <p>{weather.weatherDescription} with current Weather of {weather.currentTemp}</p>
        {/* <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="austin weather icon"/> */}
      </div>
    </div>
  );
};

export default Header;
