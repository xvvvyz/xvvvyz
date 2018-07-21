import React from "react";
import styled from "styled-components";
import { media } from "../helpers/style-utils";

const StyledWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 12rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

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
        background-color: aliceblue;
      `;
    }
  }};
`;

const StyledContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.5rem;
  color: #555;

  background-color: ${props =>
    props.overlay ? "rgba(238, 247, 255, .9)" : "transparent"};

  ${media.tablet`
    padding: 2rem;
  `};
`;

const ListItem = ({ children, backgroundImg, blur }) => (
  <StyledWrapper>
    <StyledBackground backgroundImg={backgroundImg} />
    <StyledContent overlay={!!backgroundImg && blur}>{children}</StyledContent>
  </StyledWrapper>
);

export default ListItem;
