import styled from 'styled-components';
import { media } from '../helpers/style-utils';

const ListItemLink = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.2rem 1.5rem;

  ${media.tablet`
    padding: 1.5rem 2rem;
  `};
`;

export default ListItemLink;
