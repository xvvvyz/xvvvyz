import { createGlobalStyle } from 'styled-components';
import { transitionSpeed } from '../utilities/animations';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${p => p.theme.light.textBodyPrimary};
    background: ${p => p.theme.light.backgroundPrimary};
  }

  body.dark {
    color: ${p => p.theme.dark.textBodyPrimary};
    background: ${p => p.theme.dark.backgroundPrimary};
  }

  b {
    color: ${p => p.theme.light.textHeaderPrimary};
  }

  body.dark b {
    color: ${p => p.theme.dark.textHeaderPrimary};
  }

  a {
    transition: color ${transitionSpeed};
    color: ${p => p.theme.light.textBodyPrimary};
    text-decoration: underline;
  }

  body.dark a {
    color: ${p => p.theme.dark.textBodyPrimary};
  }

  ul {
    width: 100%;
    margin: 0;
  }

  li {
    margin: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
