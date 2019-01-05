import styled from 'styled-components';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';

const Content = styled('div')`
  position: relative;
  width: 100%;
  max-width: ${breakpoints.lg};
  margin: 0 auto;
  padding: ${padding.xxl} ${padding.sm};

  @media (min-width: ${breakpoints.lg}) {
    padding: ${padding.xl} ${padding.sm};
  }
`;

export default Content;
