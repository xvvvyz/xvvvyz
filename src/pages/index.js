import React from 'react';
import styled from 'styled-components';
import { GitHub, Instagram, Linkedin, Twitter, Box } from 'react-feather';
import Content from '../components/Content';
import ImageMe from '../components/ImageMe';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Section from '../components/Section';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';
import { ReactComponent as Heart } from '../images/icon.svg';

const StyledHeart = styled(Heart)`
  width: 24px;
  margin-top: ${padding.xs};
`;

const LeftContent = styled.div`
  padding-right: ${padding.md};
`;

const ImageMeWrapper = styled('div')`
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  overflow: hidden;
`;

const FlexContent = styled(Content)`
  display: ${p => (p.breakpoint ? 'block' : 'flex')};

  @media (min-width: ${p => breakpoints[p.breakpoint]}) {
    display: flex;
  }
`;

const Delight = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const NoBreak = styled.span`
  white-space: nowrap;
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;

  a {
    margin-left: ${padding.xxxs};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO />
    <Section>
      <Content>
        <h1>
          Hey,
          <br />
          I&rsquo;m Cade.
        </h1>
        <span>
          I write <Delight>superb</Delight> software&mdash;some of which{' '}
          <NoBreak>
            is featured on the internet.{' '}
            <span aria-label="" role="img">
              👇
            </span>
          </NoBreak>
        </span>
      </Content>
    </Section>
    <Section secondary>
      <FlexContent breakpoint="md">
        <LeftContent as="h2">Projects</LeftContent>
        <Projects
          projects={[
            {
              codeLink: 'https://github.com/cadejscroggins/oern.tv',
              description: 'Live video feeds from earth.',
              siteLink: 'https://oern.tv',
              title: 'OERN',
            },
            {
              codeLink: 'https://github.com/cadejscroggins/linerad.io',
              description: 'Streamlined music discovery.',
              siteLink: 'https://linerad.io',
              title: 'Line Radio',
            },
            {
              codeLink: 'https://github.com/cadejscroggins/tilde',
              description: 'Minimal browser startpage.',
              siteLink: 'https://tilde.cadejs.com',
              title: 'Tilde',
            },
          ]}
        />
      </FlexContent>
    </Section>
    <Section>
      <FlexContent breakpoint="md">
        <LeftContent as="h2">Profile</LeftContent>
        <div>
          <p>
            I&rsquo;m officially labeled &ldquo;software engineering lead&rdquo;
            at an insurance technology <a href="https://spraoi.ai">company</a>.
            I tinker, kiteboard, ski &amp; play drums. My neighbor&rsquo;s cat
            visits me{' '}
            <a href="https://unsplash.com/photos/zaOIgXEi45g">occasionally</a>.
          </p>
          <ImageMeWrapper>
            <ImageMe />
          </ImageMeWrapper>
        </div>
      </FlexContent>
    </Section>
    <Section tertiary>
      <FlexContent>
        <LeftContent as="h2">Elsewhere</LeftContent>
        <ul>
          <SocialItem>
            <GitHub />
            <a href="https://github.com/cadejscroggins">GitHub</a>
          </SocialItem>
          <SocialItem>
            <Instagram />
            <a href="https://www.instagram.com/cadejscroggins">Instagram</a>
          </SocialItem>
          <SocialItem>
            <Linkedin />
            <a href="https://www.linkedin.com/in/cadejscroggins">LinkedIn</a>
          </SocialItem>
          <SocialItem>
            <Box />
            <a href="https://www.reddit.com/user/cadejscroggins">Reddit</a>
          </SocialItem>
          <SocialItem>
            <Twitter />
            <a href="https://twitter.com/cadejscroggins">Twitter</a>
          </SocialItem>
          <SocialItem>
            <StyledHeart alt="" />
          </SocialItem>
        </ul>
      </FlexContent>
    </Section>
  </Layout>
);

export default IndexPage;
