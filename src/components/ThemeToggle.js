import styled from 'styled-components';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';
import { transitionSpeed } from '../utilities/animations';

const ThemeToggle = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: ${padding.xs};
  border: none;
  background-color: transparent;
  transition: color ${transitionSpeed}, border-bottom-color ${transitionSpeed};
  z-index: 1;
  font: inherit;
  color: ${p => p.theme.accentSecondary};
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.textBodyPrimary};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${breakpoints.md}) {
    top: 0;
    bottom: auto;
  }
`;

export default ThemeToggle;
