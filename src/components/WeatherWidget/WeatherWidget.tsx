import { useEffect, useState } from 'react';
import './WeatherWidget.css';
import rain_icon from '../../img/regen.png';
import snow_icon from '../../img/snow.png';
import clear_icon from '../../img/sonne.png';
import wind_icon from '../../img/wind.png';
import cloudy_icon from '../../img/wolkig.png';
import fog_icon from '../../img/fog.png';
import storm_icon from '../../img/sturm.png';
import axios from 'axios';

const WeatherWidget = () => {
  const [location, setLocation] = useState("Wädenswil");
  const [locationData, setLocationData] = useState<any>({});
  const api_key = "2b5cf0907605fbfa424a01293a5886b4";

useEffect (() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`);
      const data = response.data;
      setLocationData(data);
      console.log(data);
    } catch (error) {
      console.error("Weather data fetch error:", error);
    }
  };

  fetchData();
}, [location]);
  return (
    <div className='weather-container'>
      <div className='top-bar'>
          <input type="text" className='cityInput' placeholder='Search' onChange={e => setLocation(e.target.value)} />
      </div>
      <div className='row'>
        <div className='weather-image col-12 col-lg-5'>
          {locationData.weather && (
            <>
              {locationData.weather[0].main === "Clouds" && (<img src={cloudy_icon} alt="cloudy" />)}
              {locationData.weather[0].main === "Clear" && (<img src={clear_icon} alt="clear" />)}
              {locationData.weather[0].main === "Snow" && (<img src={snow_icon} alt="snow" />)}
              {locationData.weather[0].main === "Rain" && (<img src={rain_icon} alt="rain" />)}
              {locationData.weather[0].main === "Thunderstorm" && (<img src={storm_icon} alt="storm" />)}
              {locationData.weather[0].main === "Fog" && (<img src={fog_icon} alt="fog" />)}
              {locationData.weather[0].main === "Mist" && (<img src={fog_icon} alt="fog" />)}
            </>
          )}
        </div>
        <div className=' col-12 col-lg-7'>
          <div className='weather-temp'>{locationData.main && locationData.main.temp}°C</div>
          <div className='weather-location'>{locationData.name}</div>
        </div>
        <div className='weather-wind-container'>
          <img className='weather-wind' src={wind_icon} alt="" />
          <span>Speed: {locationData.wind && locationData.wind.speed} km/h</span>
          <span>Deg: {locationData.wind && locationData.wind.deg}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
