import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, path, title }) => (
  <StaticQuery
    query={graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            author
            description
            title
            url
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => {
      const metaDescription = description || siteMetadata.description;

      return (
        <Helmet
          htmlAttributes={{ lang }}
          meta={[
            { content: 'summary', name: 'twitter:card' },
            { content: 'website', property: 'og:type' },
            { content: metaDescription, name: 'description' },
            { content: metaDescription, name: 'twitter:description' },
            { content: metaDescription, property: 'og:description' },
            { content: siteMetadata.author, name: 'twitter:creator' },
            { content: title || siteMetadata.title, name: 'twitter:title' },
            { content: title || siteMetadata.title, property: 'og:title' },
          ].concat(meta)}
          title={title || siteMetadata.title}
          titleTemplate={title ? `%s | ${siteMetadata.title}` : '%s'}
        >
          <link href={`${siteMetadata.url}${path}`} rel="canonical" />
        </Helmet>
      );
    }}
  />
);

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      name: PropTypes.string,
      property: PropTypes.string,
    })
  ),
  path: PropTypes.string,
  title: PropTypes.string,
};

SEO.defaultProps = {
  description: null,
  lang: 'en',
  meta: [],
  path: '/',
  title: null,
};

export default SEO;
