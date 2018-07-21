import styled from 'styled-components';
import { media } from '../helpers/style-utils';

const ListLink = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.2rem 1.5rem;
  font-size: .8em;
  text-decoration: underline;

  ${media.tablet`
    padding: 1.5rem 2rem;
  `};
`;

export default ListLink;
