import React from 'react';
import styled from 'styled-components';
import '../../fonts/fonts.css';

const Navbar = () => {
  const GalleryNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;

    h1 {
      padding-left: 20px;
      font-family: 'SDSamliphopangche_Outline', sans-serif;
      font-size: 40px;
    }
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

  return (
    <GalleryNav>
      <h1>쿠마 갤러리</h1>
      <GalleryUnlist>
        <li>
          <a href="/">쿠마의 견적사항</a>
        </li>
        <li>
          <a href="/">쿠마스타그램</a>
        </li>
      </GalleryUnlist>
    </GalleryNav>
  );
};

export default Navbar;
