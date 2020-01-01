import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import ThemeToggle from './ThemeToggle';
import theme from '../utilities/theme';

const Layout = ({ children }) => {
  const [dark, setDark] = useState(null);
  useEffect(() => setDark(document.body.classList.contains('dark')), []);

  const onDarkToggle = () => {
    localStorage.setItem('dark', JSON.stringify(!dark));
    document.body.classList[dark ? 'remove' : 'add']('dark');
    setDark(!dark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {dark !== null && (
          <ThemeToggle onClick={onDarkToggle}>
            {dark ? <Sun /> : <Moon />}
          </ThemeToggle>
        )}
        {children}
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
