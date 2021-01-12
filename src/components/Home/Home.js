import React from 'react';
import styled from 'styled-components';

import Weather from './Weather/Weather';

const HomeBlock = styled.div`
  position: relative;
  max-width: 1200px;
  height: 80vh;
  margin: 0 auto;
  border-radius: 5px;
`;

const Home = () => {
  return (
    <HomeBlock>
      <Weather />
      <h1>준비중입니다...</h1>
    </HomeBlock>
  );
};

export default Home;
