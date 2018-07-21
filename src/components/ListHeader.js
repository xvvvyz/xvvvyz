import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
`;

const ListHeader = ({ linkText, linkUrl, title }) => (
  <StyledHeader>
    <h3>{title}</h3>
    <a href={linkUrl}>{linkText}</a>
  </StyledHeader>
);

ListHeader.propTypes = {
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  title: PropTypes.string,
};

export default ListHeader;
