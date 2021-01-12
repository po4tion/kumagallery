import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  text-align: center;
  margin: 0 auto;
  height: 15vh;
  background-color: #718093;

  a {
    text-decoration: none;
    color: #fff;

    &:active {
      transform: scale(0.97);
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Link to="https://github.com/po4tion/kumagallery">
        <FontAwesomeIcon icon={faGithub} size="4x" />
      </Link>
      <p>Email: po4tion0429@gmail.com</p>
    </FooterBlock>
  );
};

export default Footer;
