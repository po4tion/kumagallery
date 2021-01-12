import React from 'react';
import styled from 'styled-components';
import '../../../../fonts/fonts.css';

const WeatherControlBlock = styled.div`
  pading: 2px;
  border-radius: 5px 5px 5px 50px;
  font-family: 'Wemakeprice-Bold', sans-serif;
  background-color: #74b9ff;
`;

const WeatherControl = (props) => {
  let views = null;

  if (props.current !== null) {
    views = (
      <WeatherControlBlock>
        <p>현재 날씨: {props.weather}</p>
        <p>
          현재 온도: {props.current.toFixed(1)} <sup>o</sup>C
        </p>
        <p>현재 위치: {props.place}</p>
        <p>운량: {props.clouds}%</p>
      </WeatherControlBlock>
    );
  }

  return <>{views}</>;
};

export default WeatherControl;
