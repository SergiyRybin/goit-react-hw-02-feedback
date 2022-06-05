import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => (
  <>
    {title === 'Statistics' ? <h2>{title}</h2> : <h1>{title}</h1>}
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string
};


export default Section;
