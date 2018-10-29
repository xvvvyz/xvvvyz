import styled from 'styled-components';
import { media } from '../utilities/style-utils';

const ListItemLink = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 1.5rem;
  text-align: right;

  ${media.tablet`
    padding: 1.5rem 2rem;
  `};
`;

export default ListItemLink;
