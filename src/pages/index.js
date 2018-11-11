import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import Content from '../components/Content';
import ImageMe from '../components/ImageMe';
import Layout from '../components/Layout';
import Section from '../components/Section';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';

const imageMeCss = css`
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  overflow: hidden;
`;

const ImageMeHeroWrapper = styled('div')`
  ${imageMeCss};
  position: absolute;
  right: ${padding.small};
  bottom: 0;
  display: none;

  @media (min-width: ${breakpoints.large}) {
    display: block;
  }
`;

const ImageMeAboutWrapper = styled('div')`
  ${imageMeCss};

  @media (min-width: ${breakpoints.large}) {
    display: none;
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
        <ImageMeHeroWrapper>
          <ImageMe />
        </ImageMeHeroWrapper>
      </Content>
    </Section>
    <Section secondary>
      <Content>
        <h2>Projects</h2>
        <p>...</p>
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
        <ImageMeAboutWrapper>
          <ImageMe />
        </ImageMeAboutWrapper>
      </Content>
    </Section>
    <Section tertiary>
      <Content>
        <h2>Connect</h2>
        <p>...</p>
      </Content>
    </Section>
  </Layout>
);

export default IndexPage;
