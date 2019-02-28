import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather';
import Content from '../components/Content';
import ImageMe from '../components/ImageMe';
import ImageMeTwo from '../components/ImageMeTwo';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Section from '../components/Section';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';
import { ReactComponent as Heart } from '../images/icon.svg';

const ImageWrapper = css`
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${p => p.theme.backgroundSecondary};
    opacity: 0.1;
  }
`;

const ImageMeTwoWrapper = styled.div`
  ${ImageWrapper};
  max-width: 11rem;
  margin-top: ${padding.sm};

  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
  }
`;

const StyledHeart = styled(Heart)`
  width: 24px;
  margin-top: ${padding.xs};
`;

const LeftContent = styled.div`
  order: ${p => p.mobileOrder};
  width: 100%;
  padding-right: ${padding.md};

  @media (min-width: ${breakpoints.md}) {
    order: initial;
    flex-shrink: 0;
    width: 11rem;
    text-align: right;
  }
`;

LeftContent.propTypes = {
  mobileOrder: PropTypes.number,
};

const ImageMeWrapper = styled('div')`
  ${ImageWrapper};
  width: 100%;
  max-width: 14rem;

  @media (min-width: ${breakpoints.md}) {
    max-width: 10rem;
  }
`;

const FlexContent = styled(Content)`
  display: flex;
  flex-direction: ${p => (p.noColumn ? 'row' : 'column')};

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

FlexContent.propTypes = {
  noColumn: PropTypes.bool,
};

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
      <FlexContent>
        <LeftContent mobileOrder={2}>
          <ImageMeTwoWrapper>
            <ImageMeTwo />
          </ImageMeTwoWrapper>
        </LeftContent>
        <div>
          <h1>
            Hey, <NoBreak>I&rsquo;m Cade</NoBreak>
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
        </div>
      </FlexContent>
    </Section>
    <Section secondary>
      <FlexContent breakpoint="md">
        <LeftContent as="h2">Projects</LeftContent>
        <Projects
          projects={[
            {
              codeLink:
                'https://github.com/cadejscroggins/digital-security-guide',
              description: 'It’s worth it.',
              siteLink: 'https://digitalsecurity.guide',
              title: 'Digital Security Guide',
            },
            {
              codeLink: 'https://github.com/cadejscroggins/oern.tv',
              description: 'Live video feeds from earth.',
              siteLink: 'https://oern.tv',
              title: 'On Earth Right Now',
            },
            {
              codeLink: 'https://github.com/cadejscroggins/linerad.io',
              description: 'Streamlined music discovery.',
              siteLink: 'https://linerad.io',
              title: 'Line Radio',
            },
            // {
            //   codeLink: 'https://github.com/cadejscroggins/tilde',
            //   description: 'Minimal browser startpage.',
            //   siteLink: 'https://tilde.cadejs.com',
            //   title: 'Tilde',
            // },
          ]}
        />
      </FlexContent>
    </Section>
    <Section>
      <FlexContent>
        <LeftContent as="h2">Profile</LeftContent>
        <div>
          <p>
            I spend most days working on next-gen{' '}
            <a href="https://spraoi.ai">insurance technology</a>, but occasionally
            I&rsquo;ll take pictures of my{' '}
            <a href="https://unsplash.com/photos/zaOIgXEi45g">
              neighbor&rsquo;s cat
            </a>
            .
          </p>
          <ImageMeWrapper>
            <ImageMe />
          </ImageMeWrapper>
        </div>
      </FlexContent>
    </Section>
    <Section tertiary>
      <FlexContent noColumn>
        <LeftContent as="h2">Links</LeftContent>
        <ul>
          <SocialItem>
            <GitHub />
            <a href="https://github.com/cadejscroggins">GitHub</a>
          </SocialItem>
          <SocialItem>
            <Linkedin />
            <a href="https://www.linkedin.com/in/cadejscroggins">LinkedIn</a>
          </SocialItem>
          <SocialItem>
            <Instagram />
            <a href="https://www.instagram.com/cadejscroggins">Instagram</a>
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
