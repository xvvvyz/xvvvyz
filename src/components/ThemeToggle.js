import styled from 'styled-components';
import padding from '../utilities/padding';

const ThemeToggle = styled('button')`
  position: absolute;
  top: ${padding.sm};
  right: ${padding.sm};
  padding: 0;
  border: none;
  border-bottom: dashed 1px ${p => p.theme.accentSecondary};
  background-color: transparent;
  z-index: 1;
  font: inherit;
  font-size: 0.6em;
  color: ${p => p.theme.accentSecondary};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default ThemeToggle;
