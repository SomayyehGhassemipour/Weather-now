import React from 'react';
import './CurrentWeatherBox.css'

function CurrentWeatherBox({ data }) {

  const date = new Date();
  var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className='weather'>
      <section className="top">
        <div className="weekday">{dayNames[date.getDay()]}</div>
        <div className="month">{month[date.getMonth()]} {date.getDate()}</div>
      </section>
      <section className="main">
        <p className='city'> {data.city} </p>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.gif`} />
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <p className="weather-description"> {data.weather[0].description} </p>
      </section>
      <section className="bottom">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure}hPa</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentWeatherBox;