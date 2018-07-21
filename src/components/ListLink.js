import styled from 'styled-components';
import { media } from '../helpers/style-utils';

const ListLink = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
  text-decoration: underline;

  ${media.tablet`
    padding: 2rem;
  `};
`;

export default ListLink;
