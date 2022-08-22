import React from 'react';
import './CurrentWeatherBox.css'
import DetailsBox from '../detailsBox/DetailsBox';


function CurrentWeatherBox({ data }) {

  const date = new Date();
  var dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className='weather'>
      <section className="top">
        <div className="weekday">{dayNames[date.getDay() - 1]}</div>
        <div className="month">{month[date.getMonth()]} {date.getDate()}</div>
      </section>
      <section className="main">
        <p className='city'> {data.city} </p>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.gif`} />
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <p className="weather-description"> {data.weather[0].description} </p>
      </section>
      <section className="bottom">
        <DetailsBox data={{ wind: data.wind.speed, ...data.main }} />
      </section>
    </div>
  );
}

export default CurrentWeatherBox;