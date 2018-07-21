import PropTypes from 'prop-types';
import React from 'react';
import List from './List';
import ListAudio from './ListAudio';
import ListItem from './ListItem';
import ListTag from './ListTag';
import Section from './Section';

const clientId = process.env.GATSBY_SOUNDCLOUD_CLIENT_ID;

const SectionSoundcloud = ({ favorites, favoritesCount }) => (
  <Section
    linkText={`${favoritesCount} Favorites`}
    linkUrl="https://soundcloud.com/cadejscroggins/likes"
    title="SoundCloud"
  >
    <List>
      {favorites.map(
        ({ node: { artwork_url, stream_url, title, user } }, i) => (
          <ListItem
            backgroundImg={
              artwork_url ? artwork_url.replace('large', 't500x500') : null
            }
            key={i}
            overlay
          >
            <ListTag>{user.username}</ListTag>
            {title}
            <ListAudio streamUrl={`${stream_url}?client_id=${clientId}`} />
          </ListItem>
        )
      )}
    </List>
  </Section>
);

SectionSoundcloud.propTypes = {
  favorites: PropTypes.array,
  favoritesCount: PropTypes.number,
};

export default SectionSoundcloud;
