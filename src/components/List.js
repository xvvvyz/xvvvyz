import styled from 'styled-components';
import { media } from '../helpers/style-utils';

const StyledList = styled.ul`
  ${media.tablet`
    display: flex;
  `};
`;

export default StyledList;
