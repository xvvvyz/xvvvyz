import PropTypes from "prop-types";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import twitter from "twitter-text";
import List from "./List";
import ListItem from "./ListItem";
import ListLink from "./ListLink";
import Section from "./Section";

const SectionTwitter = ({ tweets, tweetsCount }) => (
  <Section
    linkText={`${tweetsCount} Tweets`}
    linkUrl="https://twitter.com/cadejscroggins"
    title="Twitter"
  >
    <List>
      {tweets.map((tweet, i) => (
        <ListItem key={i}>
          {ReactHtmlParser(
            twitter.autoLink(tweet.node.text, {
              urlEntities: tweet.node.entities.urls,
            })
          )}
          <ListLink
            href={`https://twitter.com/cadejscroggins/status/${
              tweet.node.id_str
            }`}
          >
            View Tweet
          </ListLink>
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
