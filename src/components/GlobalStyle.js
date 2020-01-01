import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  b {
    color: ${p => p.theme.textHeaderPrimary};
  }

  a {
    color: ${p => p.theme.textBodyPrimary};
    text-decoration: underline;
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
