import PropTypes from "prop-types";
import React from "react";
import ListHeader from "./ListHeader";

const Section = ({ children, linkText, linkUrl, title }) => (
  <section>
    <ListHeader linkText={linkText} linkUrl={linkUrl} title={title} />
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Section;
