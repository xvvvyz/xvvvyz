import PropTypes from 'prop-types';
import React from 'react';
import List from './List';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';
import ListItemTag from './ListItemTag';
import Section from './Section';

const SectionGithub = ({ repos, reposCount }) => (
  <Section
    linkUrl="https://github.com/cadejscroggins?tab=repositories"
    title={`${reposCount} repositories on GitHub`}
  >
    <List>
      {repos.map(({ node: { description, name, url } }, i) => (
        <ListItem key={i}>
          <ListItemTag>{name}</ListItemTag>
          {description}
          <ListItemLink href={url}>View Project</ListItemLink>
        </ListItem>
      ))}
    </List>
  </Section>
);

SectionGithub.propTypes = {
  repos: PropTypes.array,
  reposCount: PropTypes.number,
};

export default SectionGithub;
