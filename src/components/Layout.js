import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Moon, Sun } from 'react-feather';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import GlobalStyle from './GlobalStyle';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <>
      <GlobalStyle />
      <ThemeToggle onClick={themeContext.toggleDark}>
        {themeContext.isDark ? <Sun /> : <Moon />}
      </ThemeToggle>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
