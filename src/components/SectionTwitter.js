import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import twitter from 'twitter-text';
import List from './List';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';
import Section from './Section';

const SectionTwitter = ({ tweets, tweetsCount }) => (
  <Section
    linkUrl="https://twitter.com/cadejscroggins"
    title={`${tweetsCount} Tweets on Twitter`}
  >
    <List>
      {tweets.map((tweet, i) => (
        <ListItem key={i}>
          {ReactHtmlParser(
            twitter.autoLink(tweet.node.text, {
              urlEntities: tweet.node.entities.urls,
            })
          )}
          <ListItemLink
            href={`https://twitter.com/cadejscroggins/status/${
              tweet.node.id_str
            }`}
          >
            View Tweet
          </ListItemLink>
        </ListItem>
      ))}
    </List>
  </Section>
);

SectionTwitter.propTypes = {
  favorites: PropTypes.array,
  favoritesCount: PropTypes.number,
};

export default SectionTwitter;
