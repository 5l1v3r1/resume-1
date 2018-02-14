import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  verticalCenter: {
    top: '50%',
    transform: 'translate(0,50%)',
    marginLeft: 8
  },
  verticalCenterRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0,-50%)'
  },
  verticalCenterWrapper: {
    height: '100%'
  }
});

const VerticalCenter = props => (
  <div style={muiTheme.verticalCenterWrapper}>
    {props.right
      ? <div style={muiTheme.verticalCenterRight}>{props.children}</div>
      : <div style={muiTheme.verticalCenter}>{props.children}</div>
    }
  </div>

);

VerticalCenter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  right: PropTypes.bool
};

VerticalCenter.defaultProps = {
  children: null,
  right: 'false'
};

export default VerticalCenter;
