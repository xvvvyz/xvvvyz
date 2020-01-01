const themes = require('./themes.js');

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      options: {
        background_color: '#24252a',
        display: 'minimal-ui',
        icon: 'src/images/icon.svg',
        name: 'Cade Scroggins',
        short_name: 'Cade Scroggins',
        start_url: '/',
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
    {
      options: { dark: themes.dark, light: themes.light },
      resolve: 'gatsby-styled-components-dark-mode',
    },
  ],
  siteMetadata: {
    author: '@cadejscroggins',
    description:
      'Cade Scroggins is a software developer & designer from the Pacific Northwest. ✌️',
    siteUrl: 'https://cade.me',
    title: 'Cade Scroggins',
  },
};
