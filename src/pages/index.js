import React from 'react';
import styled from 'styled-components';
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-width: ${breakpoints.lg};
  margin: 0 auto;
  padding: ${padding.xs};

  @media (min-width: ${breakpoints.md}) {
    justify-content: center;
    align-items: center;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${padding.xs};

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: ${padding.xxxs} 0;

  span {
    margin-top: 0.2em;
    margin-left: ${padding.xxxs};
  }

  @media (min-width: ${breakpoints.md}) {
    margin-right: ${padding.sm};
  }
`;

const Superb = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const IndexPage = () => (
  <Layout>
    <SEO />
    <Wrapper>
      <p>
        Hey, I&rsquo;m Cade. I build <Superb>superb</Superb> digital products. I
        currently work at <a href="https://spraoi.ai">Spraoi</a>
        &mdash;we are attempting to make insurance fun. I still don&rsquo;t know
        what I want to be when I&nbsp;grow&nbsp;up.
      </p>
      <List>
        <li>
          <Link href="https://github.com/cadejscroggins">
            <GitHub />
            <span>GitHub</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/cadejscroggins">
            <Linkedin />
            <span>LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/cadejscroggins">
            <Instagram />
            <span>Instagram</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/cadejscroggins">
            <Twitter />
            <span>Twitter</span>
          </Link>
        </li>
      </List>
    </Wrapper>
  </Layout>
);

export default IndexPage;
