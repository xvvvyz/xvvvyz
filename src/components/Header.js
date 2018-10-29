import React from 'react';
import styled from 'styled-components';
import { media } from '../utilities/style-utils';
import logo from '../images/logo.svg';

const StyledHeader = styled.header`
  margin: 6rem 0;
  text-align: center;
`;

const StyledH1 = styled.h1`
  max-width: 20rem;
  margin: 0 auto;

  ${media.tablet`
    max-width: 25rem;
  `};
`;

const StyledH2 = styled.h2`
  margin-top: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <StyledH1>
      <a href="/">
        <img src={logo} alt="Cade Scroggins" />
      </a>
    </StyledH1>
    <StyledH2>as seen on &ldquo;the internet&rdquo;</StyledH2>
  </StyledHeader>
);

export default Header;
