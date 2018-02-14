import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  verticalCenter: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0,-50%)'
  }
});

const VerticalCenter = props => (
  <div style={muiTheme.verticalCenter}>
    {props.children}
  </div>
);

VerticalCenter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

VerticalCenter.defaultProps = {
  children: null
};

export default VerticalCenter;
