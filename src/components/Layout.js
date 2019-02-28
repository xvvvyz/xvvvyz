import Cookies from 'js-cookie';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ContentWrapper from './ContentWrapper';
import ThemeToggle from './ThemeToggle';
import themes from '../utilities/themes';
import '../fonts/fira-sans/400.css';
import '../fonts/fira-sans/700.css';
import '../fonts/fira-sans/700i.css';
import '../fonts/playfair-display/700.css';

export default class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static themeKeys = {
    dark: 'dark',
    light: 'light',
  };

  state = {
    themeKey: Layout.themeKeys.dark,
  };

  componentDidMount() {
    const themeKey = Cookies.get('theme');
    if (themeKey) this.setState({ themeKey });
  }

  getNextThemeKey() {
    const { themeKey } = this.state;

    return themeKey === Layout.themeKeys.dark
      ? Layout.themeKeys.light
      : Layout.themeKeys.dark;
  }

  toggleTheme = () => {
    const themeKey = this.getNextThemeKey();
    Cookies.set('theme', themeKey);
    this.setState({ themeKey });
  };

  render() {
    const { children } = this.props;
    const { themeKey } = this.state;

    return (
      <ThemeProvider theme={themes[themeKey]}>
        <ContentWrapper>
          <Helmet>
            <meta
              content={themes[themeKey].backgroundPrimary}
              name="theme-color"
            />
          </Helmet>
          <ThemeToggle onClick={this.toggleTheme}>
            switch to {this.getNextThemeKey()} theme
          </ThemeToggle>
          {children}
        </ContentWrapper>
      </ThemeProvider>
    );
  }
}
