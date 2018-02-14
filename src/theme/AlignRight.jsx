import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  alignRight: {
    height: '100%',
    position: 'absolute',
    right: '45px',
    top: '0px'
  }
});

const AlignRight = props => (
  <div style={muiTheme.alignRight}>
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
