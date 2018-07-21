import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import './index.css';

const StyledGodWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1.5rem 5rem;
  paddingtop: 0;
`;

const Layout = ({ children, data }) => (
  <StyledGodWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: 'portfolio, personal website',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>{children()}</main>
  </StyledGodWrapper>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteDataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
