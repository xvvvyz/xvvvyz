import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledListTagWrapper = styled.div`
  margin-bottom: .5rem;
`;

const StyledListTag = styled.span`
  padding: .3rem .5rem;
  border-radius: .2rem;
  background-color: #fff;
  color: #222;
  font-size: .8em;
`;

const ListTag = ({ children }) => (
  <StyledListTagWrapper>
    <StyledListTag>{children}</StyledListTag>
  </StyledListTagWrapper>
);

ListTag.propTypes = {
  children: PropTypes.func,
};

export default ListTag;
