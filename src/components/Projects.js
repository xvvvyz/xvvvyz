import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import padding from '../utilities/padding';

const Project = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${padding.xxs};
  background: ${p => p.theme.backgroundPrimary};
  border-radius: 4px;
  padding: ${padding.xxs};

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  a {
    margin-left: ${padding.xxs};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Projects = ({ projects }) => (
  <ul>
    {projects.map(({ codeLink, siteLink, title }) => (
      <Project key={title}>
        <h3>{title}</h3>
        <div>
          <a href={siteLink}>Site</a>
          <a href={codeLink}>Code</a>
        </div>
      </Project>
    ))}
  </ul>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      codeLink: PropTypes.string,
      description: PropTypes.string,
      siteLink: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Projects;
