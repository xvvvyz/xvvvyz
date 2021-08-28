import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ArrowSvg from '../images/arrow.svg';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: ${padding.xs};
  text-align: center;

  @media (min-width: ${breakpoints.lg}) {
    text-align: left;
    flex-direction: row;
  }
`;

const SelfieContainer = styled.div`
  margin-bottom: ${padding.xs};
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: ${breakpoints.lg}) {
    margin-right: ${padding.md};
    margin-bottom: 0;
  }
`;

const ParagraphStyled = styled.p`
  margin: 0;
  max-width: 20rem;
`;

const LinkStyled = styled.a`
  color: ${(p) => p.theme.accentPrimary};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: ${(p) => p.theme.textBodyPrimary};
  }
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Cade Scroggins - probably building something" />
    <Content>
      <SelfieContainer>
        <StaticImage
          alt="Cade Scroggins"
          height={100}
          layout="fixed"
          quality={100}
          src="../images/selfie.jpg"
          width={100}
        />
      </SelfieContainer>
      <ParagraphStyled>
        Hey, I&rsquo;m Cade&mdash;a software engineer and designer that&rsquo;s
        making the benefits of DeFi more accessible at{' '}
        <LinkStyled href="https://beema.finance">
          Beema&nbsp;Finance
          <ArrowSvg
            height="1.1em"
            style={{ marginBottom: '-0.27em', marginLeft: '0.1em' }}
            width="1.1em"
          />
        </LinkStyled>
      </ParagraphStyled>
    </Content>
  </Layout>
);

export default IndexPage;
