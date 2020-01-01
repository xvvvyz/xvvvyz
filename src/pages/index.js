import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather';
import { graphql } from 'gatsby';
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

const Content = styled.div`
  margin-bottom: ${padding.xs};

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
    text-align: center;
  }

  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    align-items: center;
    text-align: left;
  }
`;

const Selfie = styled(Img)`
  flex-shrink: 0;
  margin-bottom: ${padding.xxs};
  border-radius: 20px;
  box-shadow: rgba(14, 14, 33, 0.1) 0px 22px 44px 0px;

  @media (min-width: ${breakpoints.md}) {
    border-radius: 50%;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-right: ${padding.sm};
    margin-bottom: 0;
  }
`;

const Bio = styled.p`
  margin-bottom: ${padding.xxs};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${padding.xs};

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    padding-bottom: 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    justify-content: left;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: ${padding.xxxs} 0;
  color: ${p => p.theme.accentSecondary};
  text-decoration: none;

  &:hover {
    color: ${p => p.theme.textBodyPrimary};
    text-decoration: underline;
  }

  span {
    margin-top: 0.2em;
    margin-left: ${padding.xxxs};
  }

  @media (min-width: ${breakpoints.md}) {
    margin: 0 ${padding.xxs};
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 0;
    margin: 0 ${padding.sm} 0 0;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Wrapper>
      <Content>
        <Selfie fixed={data.file.childImageSharp.fixed} />
        <div>
          <Bio>
            Hey, I&rsquo;m <b>Cade Scroggins</b>. I build superb digital
            products at <a href="https://spraoi.ai">Spraoi</a>&mdash;we are
            attempting to make insurance fun. Outside of work, you might find me{' '}
            hand&#x2011;crafting <a href="https://541.ski">skis</a>, drumming to{' '}
            lo&#x2011;fi electronic{' '}
            <a href="https://open.spotify.com/playlist/0pUOS8evkoHDkWy26F6EhF">
              music
            </a>{' '}
            or falling asleep to&nbsp;an&nbsp;
            <a href="https://www.audible.com/pd/The-Daily-Stoic-Audiobook/B01M4IDLAG">
              audiobook
            </a>
            .
          </Bio>
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
        </div>
      </Content>
    </Wrapper>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    file(relativePath: { eq: "selfie.jpg" }) {
      childImageSharp {
        fixed(width: 175, height: 175) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
