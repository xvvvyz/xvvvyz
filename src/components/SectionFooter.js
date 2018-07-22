import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 1rem;
  text-align: right;
`;

const SectionFooter = ({ linkUrl }) => (
  <StyledFooter>
    <a href={linkUrl}>View All</a>
  </StyledFooter>
);

SectionFooter.propTypes = {
  linkUrl: PropTypes.string,
};

export default SectionFooter;
