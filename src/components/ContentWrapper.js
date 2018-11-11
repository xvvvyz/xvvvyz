import styled from 'react-emotion';

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
    text-decoration: none;
  }
`;

export default ContentWrapper;
