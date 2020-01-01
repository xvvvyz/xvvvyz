import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import padding from '../utilities/padding';
import { transitionSpeed } from '../utilities/animations';

const ThemeToggleStyled = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${padding.xs};
  border: none;
  background-color: transparent;
  transition: color ${transitionSpeed}, border-bottom-color ${transitionSpeed};
  z-index: 1;
  font: inherit;
  color: ${p => p.theme.light.accentSecondary};
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.light.textBodyPrimary};
  }

  &:focus {
    outline: none;
  }
`;

const ThemeToggleGlobal = createGlobalStyle`
  body.dark .${ThemeToggleStyled.styledComponentId} {
    color: ${p => p.theme.dark.accentSecondary};

    &:hover {
      color: ${p => p.theme.dark.textBodyPrimary};
    }
  }
`;

const ThemeToggle = props => (
  <>
    <ThemeToggleGlobal />
    <ThemeToggleStyled {...props} />
  </>
);

export default ThemeToggle;
