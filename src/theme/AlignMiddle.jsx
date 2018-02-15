import React from 'react';
import PropTypes from 'prop-types';
import './AlignMiddle.css';

const AlignMiddle = props => (
  <div className="AlignMiddleWrapper">
    {props.right
      ? <div className="AlignMiddleRight">{props.children}</div>
      : <div className="AlignMiddle">{props.children}</div>
    }
  </div>

);

AlignMiddle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  right: PropTypes.bool
};

AlignMiddle.defaultProps = {
  children: null,
  right: false
};

export default AlignMiddle;
