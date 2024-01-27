import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import Result from './components/Result';
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null); // Updated to initialize as null

  const changeSearch = (value) => {
    setSearch(value);
  };

  const getWeatherData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6a3777a6c63c98ee0b7d28775b8dd10d`)
      .then((response) => {
        // Log the full response for inspection
        //console.log('Full Response:', response);
        setWeather(response.data);
        // Check for a successful response (status code 200)
        if (response.status === 200) {
          // Log the data received from the API
          console.log('Data:', response.data);

          // Update the state with the weather data
          setWeather(response.data);
        } else {
          // Log an error if the response status is not 200
          console.error('API Error:', response.statusText);
        }
      })
      .catch((error) => {
        // Log any errors that occurred during the request
        console.error('Error:', error);
      });
  };

  const searchWeatherHandler = () => {
    if (search !== "") {
      getWeatherData();
    }
  };

  useEffect(() => {
    // If you want to fetch weather data when the component mounts, uncomment the line below
    // getWeatherData();
  }, []);

  return (
    <div id="maindiv" className='max-w-[500px] mx-auto mt-2 p-3 shadow rounded-md'>
      <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
      <Result weatherData={weather} />
    </div>
  );
}

export default App;
