import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledListItemTagWrapper = styled.div`
  margin-bottom: .75rem;
`;

const StyledListItemTag = styled.span`
  padding: .3rem .5rem;
  border-radius: .2rem;
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
