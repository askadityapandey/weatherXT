import React from 'react';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloud, WiCloudy, WiShowers, WiDayRain, WiNightAltRain, WiThunderstorm, WiSnow, WiFog } from 'weather-icons-react';


const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15; // Conversion from Kelvin to Celsius
};

const kelvinToFahrenheit = (kelvin) => {
  return (kelvin - 273.15) * 9 / 5 + 32; // Conversion from Kelvin to Fahrenheit
};

const getWeatherIcon = (weatherCode) => {
  // Map weather codes to corresponding icons
  const iconMap = {
    
      '01d': <WiDaySunny size={50} />,
      '01n': <WiNightClear size={50} />,
      '02d': <WiDayCloudy size={50} />,
      '02n': <WiNightAltCloudy size={50} />,
      '03d': <WiCloud size={50} />,
      '03n': <WiCloud size={50} />,
      '04d': <WiCloudy size={50} />,
      '04n': <WiCloudy size={50} />,
      '09d': <WiShowers size={50} />,
      '09n': <WiShowers size={50} />,
      '10d': <WiDayRain size={50} />,
      '10n': <WiNightAltRain size={50} />,
      '11d': <WiThunderstorm size={50} />,
      '11n': <WiThunderstorm size={50} />,
      '13d': <WiSnow size={50} />,
      '13n': <WiSnow size={50} />,
      '50d': <WiFog size={50} />, // Added Haze icon
      '50n': <WiFog size={50} />,
  
    
    // Add more mappings for other weather codes as needed
  };

  return iconMap[weatherCode] || null;
};

const Result = ({ weatherData }) => {
  return (
    <div className='shadow-xl mt-5 p-2'>
      {weatherData ? (
        <>
          <h2 className='text-4xl text-center'> {weatherData.name} </h2>
          <div className='icon'>{getWeatherIcon(weatherData.weather[0].icon)}</div>
          <h2>Temperature: {kelvinToCelsius(weatherData.main.temp).toFixed(2)} °C / {kelvinToFahrenheit(weatherData.main.temp_max).toFixed(2)} °F</h2>
          <h2>Humidity: {weatherData.main.humidity}</h2>
          <h2>Weather Type: {weatherData.weather[0].main}</h2>
        </>
      ) : (
        <h3>Please enter a city name</h3>
      )}
    </div>
  );
};

export default Result;
