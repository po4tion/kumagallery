import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import WeatherControl from './WeatherControl/WeatherControl';

const WeatherBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Weather = () => {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [weather, setWeather] = useState([]);
  const [place, setPlace] = useState(null);
  const [clouds, setClouds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }, [currentTemp]);

  const geoSuccess = async (position) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      )
      .then((res) => {
        const data = res.data;
        console.log(data);

        setCurrentTemp(data.main.temp - 273.15);
        setWeather(data.weather.map((wt) => wt.main).join(','));
        setPlace(data.name);
        setClouds(data.clouds.all);
      })
      .catch((error) => console.log(error));
  };

  const geoError = () => {
    console.log('지리정보를 연결할 수 없습니다.');
  };

  return (
    <WeatherBlock>
      <WeatherControl
        current={currentTemp}
        weather={weather}
        place={place}
        clouds={clouds}
      />
    </WeatherBlock>
  );
};

export default Weather;
