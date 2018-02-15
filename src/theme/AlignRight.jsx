import React from 'react';
import PropTypes from 'prop-types';
import './AlignRight.css';

const AlignRight = props => (
  <div className="AlignRight">
    {props.children}
  </div>
);

AlignRight.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

AlignRight.defaultProps = {
  children: null
};

export default AlignRight;
