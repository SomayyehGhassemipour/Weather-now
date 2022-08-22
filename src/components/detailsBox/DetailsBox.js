import React from 'react';
import './DetailsBox.css';


function DetailsBox({ data }) {
  return (
    <div className="details">
      <div className="parameter-row">
        <span className="parameter-label">Feels like</span>
        <span className="parameter-value">{Math.round(data.feels_like)}°C</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Wind</span>
        <span className="parameter-value">{data.wind}m/s</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Humidity</span>
        <span className="parameter-value">{data.humidity}%</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Pressure</span>
        <span className="parameter-value">{data.pressure}hPa</span>
      </div>
    </div>
  );
}

export default DetailsBox;