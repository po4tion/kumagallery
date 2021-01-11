import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../fonts/fonts.css';

const GalleryNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryName = styled.h1`
  padding-left: 20px;
  font-family: 'SDSamliphopangche_Outline', sans-serif;
  font-size: 40px;
`;

const GalleryUnlist = styled.ul`
  display: flex;
  list-style: none;
  padding-right: 20px;

  li {
    padding: 0 10px;
  }

  a {
    color: steelblue;
    text-decoration: none;
    font-family: 'MaplestoryOTFBold', sans-serif;
    font-size: 20px;

    &:active {
      color: green;
    }
  }
`;

const Navbar = () => {
  return (
    <GalleryNav>
      <GalleryName>쿠마 갤러리</GalleryName>
      <GalleryUnlist>
        <li>
          {/* <a href="/profile">쿠마의 견적사항</a> */}
          <Link to="/profile">쿠마의 견적사항</Link>
        </li>
        <li>
          <Link to="/kumastagram">쿠마스타그램</Link>
        </li>
      </GalleryUnlist>
    </GalleryNav>
  );
};

export default Navbar;
