import React, { useState } from 'react';
import styled from 'styled-components';
import kuma1 from '../../img/photo/kuma1.jpg';
import kuma2 from '../../img/photo/kuma2.jpg';
import kuma3 from '../../img/photo/kuma3.jpg';
import kuma4 from '../../img/photo/kuma4.jpg';
import kuma5 from '../../img/photo/kuma5.jpg';
import kuma6 from '../../img/photo/kuma6.jpg';
import kuma7 from '../../img/photo/kuma7.jpg';
import kuma8 from '../../img/photo/kuma8.jpg';
import kuma9 from '../../img/photo/kuma9.jpg';
import kuma10 from '../../img/photo/kuma10.jpg';
import kuma11 from '../../img/photo/kuma11.jpg';
import kuma12 from '../../img/photo/kuma12.jpg';
import kuma13 from '../../img/photo/kuma13.jpg';
import kuma14 from '../../img/photo/kuma14.jpg';
import kuma15 from '../../img/photo/kuma15.jpg';
import kuma16 from '../../img/photo/kuma16.jpg';

let KumastagramBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0;
  max-width: 1600px;
`;

const Btn = styled.p`
  border: 1px solid steelblue;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: #badc58;
  color: black;
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: black;
    color: #fff;
  }
`;

const GridBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const GridImg = styled.img`
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  width: 395px;
  height: 605px;
  object-fit: cover;
`;

const kumaArray = [
  kuma5,
  kuma6,
  kuma7,
  kuma8,
  kuma9,
  kuma10,
  kuma11,
  kuma12,
  kuma13,
  kuma14,
  kuma15,
  kuma16,
];

const Kumastagram = () => {
  const [num, setNum] = useState(0);

  const [word, setWord] = useState(kumaArray[num]);

  const [value, setValue] = useState([
    <GridImg key="a" src={kuma1} alt="" />,
    <GridImg key="b" src={kuma2} alt="" />,
    <GridImg key="c" src={kuma3} alt="" />,
    <GridImg key="d" src={kuma4} alt="" />,
  ]);

  const addImgHandler = () => {
    if (num > 11) {
      return;
    }
    setValue(value.concat([<GridImg key={num} src={word} alt="" />]));

    setNum(num + 1);

    setWord(kumaArray[num + 1]);
  };

  return (
    <KumastagramBlock>
      <GridBlock>{value}</GridBlock>
      <Btn onClick={addImgHandler}>클릭</Btn>
    </KumastagramBlock>
  );
};

export default Kumastagram;
