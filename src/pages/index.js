import React from 'react';
import SectionGithub from '../components/SectionGithub';
import SectionReddit from '../components/SectionReddit';
import SectionSoundcloud from '../components/SectionSoundcloud';
import SectionTwitter from '../components/SectionTwitter';
import SectionUnsplash from '../components/SectionUnsplash';

const HomePage = ({ data }) => (
  <div>
    <SectionGithub
      repos={data.githubViewer.pinnedRepositories.edges}
      reposCount={data.githubViewer.repositories.totalCount}
    />
    <SectionReddit
      posts={data.allRedditPost.edges}
      postsCount={data.allRedditPost.totalCount}
    />
    <SectionSoundcloud
      favorites={data.allSoundcloudFavorite.edges}
      favoritesCount={data.soundcloudUser.public_favorites_count}
    />
    <SectionTwitter
      tweets={data.allTweet.edges}
      tweetsCount={data.tweet.user.statuses_count}
    />
    {/*<SectionUnsplash*/}
      {/*photos={data.allUnsplashPhoto.edges}*/}
      {/*photosCount={data.unsplashPhoto.user.total_photos}*/}
    {/*/>*/}
  </div>
);

export default HomePage;

export const query = graphql`
  query PageQuery {
    allTweet(sort: { fields: [created_at], order: ASC }) {
      edges {
        node {
          created_at
          id_str
          in_reply_to_status_id_str
          text
          entities {
            hashtags {
              text
            }
            user_mentions {
              screen_name
            }
            urls {
              display_url
              expanded_url
              indices
              url
            }
          }
        }
      }
    }
    tweet {
      user {
        statuses_count
      }
    }
    allUnsplashPhoto(limit: 3, sort: { fields: [created_at], order: DESC }) {
      edges {
        node {
          urls {
            full
            regular
            small
          }
          created_at
        }
      }
    }
    unsplashPhoto {
      user {
        total_photos
      }
    }
    githubViewer {
      pinnedRepositories {
        edges {
          node {
            description
            homepageUrl
            name
            url
          }
        }
      }
      repositories {
        totalCount
      }
    }
    allSoundcloudFavorite(limit: 2) {
      edges {
        node {
          title
          stream_url
          artwork_url
          user {
            username
          }
        }
      }
    }
    soundcloudUser {
      public_favorites_count
    }
    allRedditPost(limit: 3) {
      totalCount
      edges {
        node {
          subreddit
          title
          permalink
          preview {
            images {
              source {
                url
              }
            }
          }
        }
      }
    }
  }
`;
