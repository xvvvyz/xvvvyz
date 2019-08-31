import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { Moon, Sun } from 'react-feather';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import ThemeToggle from './ThemeToggle';
import themes from '../utilities/themes';

export default class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static themeKeys = {
    dark: 'dark',
    light: 'light',
  };

  state = {
    themeKey: Layout.themeKeys.light,
  };

  getNextThemeKey() {
    const { themeKey } = this.state;

    return themeKey === Layout.themeKeys.dark
      ? Layout.themeKeys.light
      : Layout.themeKeys.dark;
  }

  toggleTheme = () => {
    const themeKey = this.getNextThemeKey();
    this.setState({ themeKey });
  };

  render() {
    const { children } = this.props;
    const { themeKey } = this.state;
    const nextThemeKey = this.getNextThemeKey();

    return (
      <ThemeProvider theme={themes[themeKey]}>
        <>
          <GlobalStyle />
          <Helmet>
            <meta
              content={themes[themeKey].backgroundPrimary}
              name="theme-color"
            />
          </Helmet>
          <ThemeToggle onClick={this.toggleTheme}>
            {nextThemeKey === Layout.themeKeys.dark && <Moon />}
            {nextThemeKey === Layout.themeKeys.light && <Sun />}
          </ThemeToggle>
          {children}
        </>
      </ThemeProvider>
    );
  }
}
