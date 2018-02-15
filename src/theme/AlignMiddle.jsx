import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  alignMiddle: {
    top: '50%',
    left: '50%',
    marginLeft: 8,
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    whiteSpace: 'nowrap'
  },
  alignMiddleRight: {
    right: 0,
    top: '50%',
    transform: 'translate(-50%,-50%)',
    position: 'absolute'

  },
  alignMiddleWrapper: {
    height: '100%',
    position: 'relative'
  }
});

const alignMiddle = props => (
  <div style={muiTheme.alignMiddleWrapper}>
    {props.right
      ? <div style={muiTheme.alignMiddleRight}>{props.children}</div>
      : <div style={muiTheme.alignMiddle}>{props.children}</div>
    }
  </div>

);

alignMiddle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  right: PropTypes.bool
};

alignMiddle.defaultProps = {
  children: null,
  right: false
};

export default alignMiddle;
