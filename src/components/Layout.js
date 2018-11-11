import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import themes from '../utilities/themes';
import ThemeToggle from './ThemeToggle';
import ContentWrapper from './ContentWrapper';

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

    return (
      <ThemeProvider theme={themes[themeKey]}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={({
            site: {
              siteMetadata: { title },
            },
          }) => (
            <>
              <Helmet>
                <html lang="en" />
                <title>{title}</title>
              </Helmet>
              <ContentWrapper>
                <ThemeToggle onClick={this.toggleTheme}>
                  switch to {this.getNextThemeKey()} mode
                </ThemeToggle>
                {children}
              </ContentWrapper>
            </>
          )}
        />
      </ThemeProvider>
    );
  }
}
