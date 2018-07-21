import PropTypes from 'prop-types';
import React from 'react';
import List from './List';
import ListItem from './ListItem';
import ListLink from './ListLink';
import Section from './Section';

const SectionGithub = ({ repos, reposCount }) => (
  <Section
    linkText={`${reposCount} Repositories`}
    linkUrl="https://github.com/cadejscroggins"
    title="Github"
  >
    <List>
      {repos.map(({ node: { description, name, url } }, i) => (
        <ListItem key={i}>
          <div>{description}</div>
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
