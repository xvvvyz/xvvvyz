require('dotenv').config({ path: '.env' });

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['PT Mono'],
      },
    },
    {
      resolve: 'gatsby-source-unsplash',
      options: {
        appId: process.env.UNSPLASH_APP_ID,
        collections: ['2357847'],
        perPage: '1000',
      },
    },
    {
      resolve: 'gatsby-source-twitter-timeline',
      options: {
        count: 3,
        credentials: {
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        },
        result_type: 'recent',
        screen_name: 'cadejscroggins',
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: { Authorization: process.env.GITHUB_AUTH_HEADER },
        queries: [
          `{
            viewer {
              repositories(last:100) {
                totalCount
              }
            }
            viewer {
              pinnedRepositories(first: 3) {
                edges {
                  node {
                    description
                    homepageUrl
                    name
                    url
                  }
                }
              }
            }
          }`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-soundcloud',
      options: {
        userID: '3253360',
        clientID: process.env.GATSBY_SOUNDCLOUD_CLIENT_ID,
      },
    },
  ],
};
