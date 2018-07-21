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

const Layout = ({ children }) => (
  <StyledGodWrapper>
    <Helmet
      title="Cade Scroggins"
      meta={[
        {
          name: 'description',
          content: 'I&rsquo;m a software developer &amp; designer. Other things as well.',
        },
        {
          name: 'keywords',
          content: 'portfolio, personal website',
        },
      ]}
    />
    <Header />
    <main>{children()}</main>
  </StyledGodWrapper>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
