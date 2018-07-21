import PropTypes from 'prop-types';
import React from 'react';
import List from './List';
import ListItem from './ListItem';
import ListLink from './ListLink';
import ListTag from './ListTag';
import Section from './Section';

const SectionGithub = ({ repos, reposCount }) => (
  <Section
    linkText={`${reposCount} Repositories`}
    linkUrl="https://github.com/cadejscroggins"
    title="GitHub"
  >
    <List>
      {repos.map(({ node: { description, name, url } }, i) => (
        <ListItem key={i}>
          <ListTag>{name}</ListTag>
          {description}
          <ListLink href={url}>View Project</ListLink>
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
