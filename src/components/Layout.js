import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import { ThemeContext } from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import GlobalStyle from './GlobalStyle';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  const { isDark, toggleDark } = useContext(ThemeManagerContext);
  const { backgroundPrimary, textBodyPrimary } = useContext(ThemeContext);
  const [hasUpdated, setHasUpdated] = useState(false);

  useEffect(() => {
    if (hasUpdated) document.body.style.background = backgroundPrimary;
    if (hasUpdated) document.body.style.color = textBodyPrimary;
    else setHasUpdated(true);
  }, [backgroundPrimary]);

  return (
    <>
      <GlobalStyle />
      {hasUpdated && (
        <ThemeToggle onClick={toggleDark}>
          {isDark ? <Sun /> : <Moon />}
        </ThemeToggle>
      )}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
