import styled from 'styled-components';
import padding from '../utilities/padding';
import { transitionSpeed } from '../utilities/animations';

const ThemeToggle = styled('button')`
  position: absolute;
  top: ${padding.xs};
  right: ${padding.sm};
  padding: 0;
  border: none;
  border-bottom: dashed 2px ${p => p.theme.accentSecondary};
  background-color: transparent;
  transition: color ${transitionSpeed}, border-bottom-color ${transitionSpeed};
  z-index: 1;
  font: inherit;
  font-size: 0.75em;
  color: ${p => p.theme.accentSecondary};
  cursor: pointer;

  &:hover {
    border-bottom-color: ${p => p.theme.textBodyPrimary};
    color: ${p => p.theme.textBodyPrimary};
  }

  &:focus {
    outline: none;
  }
`;

export default ThemeToggle;
