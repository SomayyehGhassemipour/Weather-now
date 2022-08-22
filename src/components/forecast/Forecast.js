import React from 'react';
import './Forecast.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import DetailsBox from '../detailsBox/DetailsBox';

function Forecast({ data }) {
  var dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const day = new Date().getDay();
  const forecastDays = dayNames.slice(day, dayNames.length).concat(dayNames.slice(0, day));
  return (
    <>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="forecast-weather-box">
                  <label className="weekday">{forecastDays[i]}</label>
                  <label className="temprature">{Math.round(item.main.temp)}°C</label>
                  <img className="forecast-icon" src={`icons/${item.weather[0].icon}.gif`} alt="" />
                  <div className="temp-min-max">
                    <label className="temp-max">↑ {Math.round(item.main.temp_max)}°C </label>
                    <label className="temp-min">↓ {Math.round(item.main.temp_min)}°C </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="forecast-details">
                <DetailsBox data={{ wind: item.wind.speed, ...item.main }} />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;