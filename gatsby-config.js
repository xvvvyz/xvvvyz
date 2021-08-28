module.exports = {
  flags: {
    DEV_WEBPACK_CACHE: false,
    FAST_DEV: false,
    LMDB_STORE: false,
    PARALLEL_SOURCING: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
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
      options: { fonts: ['Nunito:400'] },
      resolve: 'gatsby-plugin-google-fonts',
    },
    {
      options: { rule: { include: /images/ } },
      resolve: 'gatsby-plugin-react-svg',
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
    author: '@cadejscroggins',
    description:
      'Cade Scroggins is a software engineer with a knack for creating delightful user experiences.',
    siteUrl: 'https://cade.me',
    title: 'Cade Scroggins',
  },
};
