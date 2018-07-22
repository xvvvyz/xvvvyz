import PropTypes from 'prop-types';
import React from 'react';
import SectionHeader from './SectionHeader';
import SectionFooter from './SectionFooter';

const Section = ({ children, linkText, linkUrl, title }) => (
  <section>
    <SectionHeader title={title} />
    {children}
    <SectionFooter linkUrl={linkUrl} />
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Section;
