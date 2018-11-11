import React from 'react';
import styled from 'react-emotion';
import Layout from '../components/layout';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';

const Section = styled('section')`
  display: flex;
  align-items: center;
  min-height: 82vh;
  background: ${p =>
    p.secondary ? p.theme.backgroundSecondary : p.theme.backgroundPrimary};
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 ${p => (p.last ? 100 : 85)}%);
`;

const Content = styled('div')`
  width: 100%;
  max-width: ${breakpoints.large};
  margin: 0 auto;
  padding: ${padding.larger} ${padding.small};

  p {
    margin: 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <Section>
      <Content>
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
          If I&rsquo;m not writing{' '}
          <b>
            <i>ridiculously trendy</i>
          </b>{' '}
          copy for my personal website or working on{' '}
          <a href="https://spraoi.ai">next-gen insurance technology</a>, you
          might find me drumming, playing a piano, perusing Reddit,
          kiteboarding, skiing, or taking pictures of{' '}
          <a href="https://unsplash.com/photos/zaOIgXEi45g">
            my neighbor&rsquo;s cat
          </a>
          .
        </p>
      </Content>
    </Section>
    <Section secondary last>
      <Content>
        <h2>Connect</h2>
        <pre>TODO: add contact stuff</pre>
      </Content>
    </Section>
  </Layout>
);

export default IndexPage;
