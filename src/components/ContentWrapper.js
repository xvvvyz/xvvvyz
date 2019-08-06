import styled from 'styled-components';
import { transitionSpeed } from '../utilities/animations';

const ContentWrapper = styled('div')`
  color: ${p => p.theme.textBodyPrimary};
  background: ${p => p.theme.backgroundPrimary};

  h1,
  h2,
  h3,
  h4,
  b {
    color: ${p => p.theme.textHeaderPrimary};
  }

  a {
    transition: color ${transitionSpeed};
    color: ${p => p.theme.accentSecondary};
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.textBodyPrimary};
      text-decoration: underline;
    }
  }

  ul {
    width: 100%;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;

export default ContentWrapper;
