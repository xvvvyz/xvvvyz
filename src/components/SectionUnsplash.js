import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ImageZoom from 'react-medium-image-zoom';
import List from './List';
import ListItem from './ListItem';
import Section from './Section';

const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SectionUnsplash = ({ photos, photosCount }) => (
  <Section
    linkUrl="https://unsplash.com/@cadejscroggins"
    title={`${photosCount} Photos on Unsplash`}
  >
    <List>
      {photos.map((photo, i) => (
        <ListItem backgroundImg={photo.node.urls.small} blur key={i} noPadding>
          <StyledImgWrapper>
            <ImageZoom
              image={{
                src: photo.node.urls.small,
                style: { maxWidth: '100%', maxHeight: '100%' },
              }}
              zoomImage={{
                src: photo.node.urls.regular,
              }}
            />
          </StyledImgWrapper>
        </ListItem>
      ))}
    </List>
  </Section>
);

SectionUnsplash.propTypes = {
  photos: PropTypes.array,
  photosCount: PropTypes.number,
};

export default SectionUnsplash;
