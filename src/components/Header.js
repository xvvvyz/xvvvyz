import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/style-utils';
import logo from '../images/logo.svg';

const StyledHeader = styled.header`
  text-align: center;
`;

const StyledH1 = styled.h1`
  max-width: 20rem;
  margin: 5rem auto 0;

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
    <StyledH2>As Seen On &ldquo;The Internet&rdquo;</StyledH2>
  </StyledHeader>
);

export default Header;
