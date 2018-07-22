import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledListItemTagWrapper = styled.div`
  margin-bottom: 0.75rem;
`;

const StyledListItemTag = styled.span`
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  background-color: #fff;
  color: #222;
`;

const ListItemTag = ({ children }) => (
  <StyledListItemTagWrapper>
    <StyledListItemTag>{children}</StyledListItemTag>
  </StyledListItemTagWrapper>
);

ListItemTag.propTypes = {
  children: PropTypes.node,
};

export default ListItemTag;
