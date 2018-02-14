import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  alignRight: {
    height: '100%',
    position: 'absolute',
    right: '45px',
    top: '0px'
  },
  startDateWrapper: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0,-50%)'
  }
});

const AlignRightAndVerticalCenter = props => (
  <div style={muiTheme.alignRight}>
    <div style={muiTheme.startDateWrapper}>
      {props.children}
    </div>
  </div>
);

AlignRightAndVerticalCenter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

AlignRightAndVerticalCenter.defaultProps = {
  children: null
};

export default AlignRightAndVerticalCenter;
