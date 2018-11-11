module.exports = {
  siteMetadata: {
    title: 'Cade Scroggins',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/typography.js`,
      },
    },
  ],
};
