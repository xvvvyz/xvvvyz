import styled from 'styled-components';

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

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.03em;
  }

  a {
    color: ${p => p.theme.accentSecondary};
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
