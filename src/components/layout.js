import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import themes from '../utilities/themes';
import padding from '../utilities/padding';

const Wrapper = styled('main')`
  color: ${p => p.theme.textBodyPrimary};
  background: ${p => p.theme.backgroundPrimary};

  h1,
  h2,
  h3,
  h4,
  b {
    color: ${p => p.theme.textHeaderPrimary};
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.03em;
  }

  a {
    color: ${p => p.theme.accentSecondary};
    text-decoration: none;
  }
`;

const ThemeToggle = styled('button')`
  position: absolute;
  top: ${padding.small};
  right: ${padding.small};
  padding: 0;
  border: none;
  border-bottom: dashed 1px ${p => p.theme.accentSecondary};
  background-color: transparent;
  z-index: 1;
  font: inherit;
  font-size: 0.6em;
  color: ${p => p.theme.accentSecondary};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    theme: 'dark',
  };

  componentDidMount() {
    if (typeof localStorage === 'undefined') return;
    const theme = localStorage.getItem('theme');
    if (!theme) return;
    this.setState({ theme });
  }

  getNextTheme() {
    const { theme } = this.state;
    return theme === 'dark' ? 'light' : 'dark';
  }

  toggleTheme = () => {
    const theme = this.getNextTheme();
    this.setState({ theme });
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem('theme', theme);
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme]}>
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
              <ThemeToggle onClick={this.toggleTheme}>
                switch to {this.getNextTheme()} mode
              </ThemeToggle>
              <Wrapper>{children}</Wrapper>
            </>
          )}
        />
      </ThemeProvider>
    );
  }
}
