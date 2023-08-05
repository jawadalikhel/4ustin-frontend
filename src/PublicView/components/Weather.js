import React, { useState, useEffect } from 'react';
import './Styles/Weather.css'; // Create this CSS file to style the header

const Header = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    // Fetch weather data from an API (replace 'YOUR_API_KEY' and 'CITY_NAME' with actual data)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6d755b05fabec6acb3cba65df652de9b
    `)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
      })
      .catch(err =>{
        console.error(err, "<---- error")
      })
  }, []);

  return (
    <div className="weather">
      <div className="weather-box">
        <h2>Weather in {weather.name}</h2>
        <p>{weather.weather && weather.weather[0].description}</p>
        {/* <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="austin weather icon"/> */}
      </div>
    </div>
  );
};

export default Header;
