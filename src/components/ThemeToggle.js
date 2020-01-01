import styled from 'styled-components';
import padding from '../utilities/padding';
import { transitionSpeed } from '../utilities/animations';

const ThemeToggle = styled.button`
  position: absolute;
  top: 0;
  right: 0;
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
`;

export default ThemeToggle;
