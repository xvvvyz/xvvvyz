module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      options: {
        background_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
        name: 'Cade Scroggins',
        short_name: 'Cade Scroggins',
        start_url: '/',
        theme_color: '#fff',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: { pathToConfigModule: 'src/utilities/typography.js' },
      resolve: 'gatsby-plugin-typography',
    },
    {
      options: { name: 'images', path: 'src/images' },
      resolve: 'gatsby-source-filesystem',
    },
  ],
  siteMetadata: {
    title: 'Cade Scroggins',
  },
};
