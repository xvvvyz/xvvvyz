module.exports = {
  siteMetadata: {
    title: 'Cade Scroggins',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
