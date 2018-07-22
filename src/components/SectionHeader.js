import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/style-utils';

const StyledHeader = styled.header`
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;

  ${media.tablet`
    text-align: left;
  `};
`;

const SectionHeader = ({ title }) => (
  <StyledHeader>
    <h2>{title}</h2>
  </StyledHeader>
);

SectionHeader.propTypes = {
  linkText: PropTypes.string,
  title: PropTypes.string,
};

export default SectionHeader;
