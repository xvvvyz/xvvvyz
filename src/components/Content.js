import styled from 'react-emotion';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';

const Content = styled('div')`
  position: relative;
  width: 100%;
  max-width: ${breakpoints.large};
  margin: ${padding.larger} auto;
  padding: 0 ${padding.small};
`;

export default Content;
