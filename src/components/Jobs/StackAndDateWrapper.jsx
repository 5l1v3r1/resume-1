import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import StackChip from '../StackChip';

const muiTheme = getMuiTheme({
  headerRight: {
    height: '100%',
    position: 'absolute',
    right: '45px',
    top: '0px'
  },
  startDate: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0,-50%)'
  }
});

const StackAndDateWrapper = ({ stackLabels, startDate }) => (
  <div style={muiTheme.headerRight}>
    <StackChip stackLabels={stackLabels} />
    <div style={muiTheme.startDate}>
      {startDate && <StartYear startDate={startDate} /> }
    </div>
  </div>
);

const StartYear = ({ startDate }) => (startDate ? startDate.split('-')[0] : '');

const jobItemShape = {
  stackLabels: PropTypes.string,
  startDate: PropTypes.array
};

StackAndDateWrapper.propTypes = {
  // stackLabels: PropTypes.arrayOf((PropTypes.shape(jobItemShape))),
  startDate: PropTypes.string
};

StackAndDateWrapper.defaultProps = {
  stackLabels: [],
  startDate: null
};

export default StackAndDateWrapper;
