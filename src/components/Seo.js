import Helmet from 'react-helmet';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Seo = ({ description, lang, meta, path, title }) => (
  <StaticQuery
    query={graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            author
            description
            siteUrl
            title
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
          titleTemplate={
            title && path !== '/' ? `%s | ${siteMetadata.title}` : '%s'
          }
        >
          <link href={`${siteMetadata.siteUrl}${path}`} rel="canonical" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'http://schema.org/',
              '@type': 'Person',
              description: siteMetadata.description,
              email: 'hello@cade.me',
              familyName: 'Scroggins',
              givenName: 'Cade',
              jobTitle: 'Software Engineer',
              mainEntityOfPage: siteMetadata.siteUrl,
              name: 'Cade Scroggins',
              sameAs: [
                'https://github.com/cadejscroggins',
                'https://www.linkedin.com/in/cadejscroggins',
                'https://www.instagram.com/cadejscroggins',
                'https://twitter.com/cadejscroggins',
              ],
              worksFor: {
                '@type': 'Organization',
                description:
                  'A simple gateway into the benefits of decentralized finance.',
                mainEntityOfPage: 'https://beema.finance',
                name: 'Beema Finance',
              },
            })}
          </script>
        </Helmet>
      );
    }}
  />
);

Seo.defaultProps = {
  description: null,
  lang: 'en',
  meta: [],
  path: '/',
  title: null,
};

export default Seo;
