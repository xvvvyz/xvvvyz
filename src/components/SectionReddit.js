import PropTypes from 'prop-types';
import React from 'react';
import List from './List';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';
import ListItemTag from './ListItemTag';
import Section from './Section';

const SectionReddit = ({ posts, postsCount }) => (
  <Section
    linkUrl="https://www.reddit.com/user/cadejscroggins"
    title={`${postsCount} posts on Reddit`}
  >
    <List>
      {posts.map(({ node: { subreddit, title, permalink, preview } }, i) => (
        <ListItem backgroundImg={preview.images[0].source.url} key={i} overlay>
          {console.log(preview)}
          <ListItemTag>/r/{subreddit}</ListItemTag>
          {title}
          <ListItemLink href={`https://www.reddit.com${permalink}`}>
            View Post
          </ListItemLink>
        </ListItem>
      ))}
    </List>
  </Section>
);

SectionReddit.propTypes = {
  posts: PropTypes.array,
  postsCount: PropTypes.number,
};

export default SectionReddit;
