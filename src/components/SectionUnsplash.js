import PropTypes from "prop-types";
import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import Section from "./Section";

const SectionUnsplash = ({ photos, photosCount }) => (
  <Section
    linkText={`${photosCount} Photos`}
    linkUrl="https://unsplash.com/@cadejscroggins"
    title="Unsplash"
  >
    <List>
      {photos.map((photo, i) => (
        <ListItem key={i} backgroundImg={photo.node.urls.small} />
      ))}
    </List>
  </Section>
);

SectionUnsplash.propTypes = {
  photos: PropTypes.array,
  photosCount: PropTypes.number,
};

export default SectionUnsplash;
