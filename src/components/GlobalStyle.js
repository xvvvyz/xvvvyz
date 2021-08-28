import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(p) => p.theme.textBodyPrimary};
    background: ${(p) => p.theme.backgroundPrimary};
  }
`;

export default GlobalStyle;
