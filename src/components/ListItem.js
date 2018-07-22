import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/style-utils';

const StyledWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 13rem;
  margin-bottom: 1.5rem;
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(108, 115, 126, 0.12),
    0 1px 2px rgba(108, 115, 126, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:last-of-type {
    margin-bottom: 0;
  }

  ${media.tablet`
    height: 15rem;
    margin-right: 1.5rem;
    margin-bottom: 0;

    &:last-of-type {
      margin-right: 0;
    }
  `};
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ backgroundImg }) => {
    if (backgroundImg) {
      return `
        background: url(${backgroundImg}) no-repeat center center; 
        background-size: cover;
      `;
    } else {
      return `
        background-color: #e8ecf1;
      `;
    }
  }};

  ${({ blur }) => {
    if (!blur) return;

    return `
      top: -10px;
      right: -10px;
      bottom: -10px;
      left: -10px;
      filter: blur(4px);
    `;
  }};
`;

const StyledContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${({ noPadding }) => (noPadding ? '0' : '1.5rem')};
  font-size: 0.9em;
  color: ${({ overlay }) => (overlay ? '#fff' : '#6c737e')};

  background-color: ${({ overlay }) =>
    overlay ? 'rgba(108, 115, 126, .8)' : 'transparent'};

  ${media.tablet`
    padding: ${({ noPadding }) => (noPadding ? '0' : '2rem')};
  `};
`;

const ListItem = ({ children, backgroundImg, blur, overlay, noPadding }) => (
  <StyledWrapper>
    <StyledBackground backgroundImg={backgroundImg} blur={blur} />
    <StyledContent noPadding={noPadding} overlay={overlay}>
      {children}
    </StyledContent>
  </StyledWrapper>
);

export default ListItem;
