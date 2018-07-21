import PropTypes from 'prop-types';
import React from 'react';
import List from './List';
import ListLink from './ListLink';
import ListItem from './ListItem';
import Section from './Section';

const SectionReddit = ({ posts, postsCount }) => (
  <Section
    linkText={`${postsCount} Posts`}
    linkUrl="https://reddit.com/user/cadejscroggins/posts/"
    title="Reddit"
  >
    <List>
      {posts.map(
        ({ node: { subreddit, title, permalink, preview } }, i) => (
          <ListItem
            backgroundImg={preview.images[0].source.url}
            key={i}
            overlay
          >
            /r/{subreddit}<br />{title}
            <ListLink href={`https://reddit.com${permalink}`}>
              View Post
            </ListLink>
          </ListItem>
        )
      )}
    </List>
  </Section>
);

SectionReddit.propTypes = {
  posts: PropTypes.array,
  postsCount: PropTypes.number,
};

export default SectionReddit;
