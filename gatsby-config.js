require('dotenv').config({ path: '.env' });

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cadejs.com',
      },
    },
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
      resolve: 'gatsby-source-twitter',
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
              repositories(last: 100) {
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
        queries: [
          {
            entities: [{ name: 'SoundcloudUser' }],
            path: 'users/3253360',
            queryParams: {
              client_id: process.env.GATSBY_SOUNDCLOUD_CLIENT_ID,
            },
          },
          {
            entities: [{ name: 'SoundcloudFavorite' }],
            path: 'users/3253360/favorites',
            queryParams: {
              client_id: process.env.GATSBY_SOUNDCLOUD_CLIENT_ID,
              limit: 1000,
            },
          }
        ],
      },
    },
    {
      resolve: "gatsby-source-reddit",
      options: {
        path: 'user/cadejscroggins/submitted',
        query: { limit: 1000 },
        queries: [
          {
            entities: [
              {
                idLocation: 'data.id',
                location: 'data.children',
                map: 'data',
                name: 'RedditPost',
              },
            ],
            path: 'user/cadejscroggins/submitted',
            queryParams: { limit: 1000 },
          }
        ],
      },
    },
  ],
};
