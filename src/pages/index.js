import React from 'react';
import styled from 'react-emotion';
import Layout from '../components/Layout';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';
import ImageMe from '../components/ImageMe';

const Section = styled('section')`
  display: flex;
  align-items: center;
  min-height: 82vh;
  background: ${p =>
    p.secondary
      ? p.theme.backgroundSecondary
      : p.tertiary
      ? p.theme.backgroundTertiary
      : p.theme.backgroundPrimary};
  clip-path: ${p =>
    p.secondary ? 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' : 'none'};
`;

const Content = styled('div')`
  position: relative;
  width: 100%;
  max-width: ${breakpoints.large};
  margin: ${padding.larger} auto;
  padding: 0 ${padding.small};

  p {
    margin: 0;
  }
`;

const ImageMeWrapper = styled('div')`
  position: absolute;
  top: 4.9rem;
  right: ${padding.small};
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  opacity: 0.3;
  overflow: hidden;

  @media (min-width: ${breakpoints.medium}) {
    opacity: 1;
  }
`;

const Z1 = styled('div')`
  position: relative;
  z-index: 1;
`;

const IndexPage = () => (
  <Layout>
    <Section>
      <Content>
        <Z1>
          <h1>
            Hey,
            <br />
            I&rsquo;m Cade.
          </h1>
          <p>
            I build{' '}
            <b>
              <i>delightful</i>
            </b>{' '}
            apps for the www.
          </p>
        </Z1>
        <ImageMeWrapper>
          <ImageMe />
        </ImageMeWrapper>
      </Content>
    </Section>
    <Section secondary>
      <Content>
        <h2>Projects</h2>
        <pre>TODO: add projects</pre>
      </Content>
    </Section>
    <Section>
      <Content>
        <h2>About</h2>
        <p>
          When I&rsquo;m not writing trendy copy or working on{' '}
          <a href="https://spraoi.ai">next-gen insurance technology</a>, you
          might find me playing an instrument, kiteboarding, skiing, or taking
          pictures of{' '}
          <a href="https://unsplash.com/photos/zaOIgXEi45g">
            my neighbor&rsquo;s cat
          </a>
          .
        </p>
      </Content>
    </Section>
    <Section tertiary>
      <Content>
        <h2>Connect</h2>
        <pre>TODO: add contact stuff</pre>
      </Content>
    </Section>
  </Layout>
);

export default IndexPage;
