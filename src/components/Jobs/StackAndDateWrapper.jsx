import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  chip: {
    marginRight: 20
  },
  headerRight: {
    height: '100%',
    position: 'absolute',
    right: '45px',
    top: '0px'
  },
  stackLabel: {
    float: 'right',
    position: 'absolute',
    right: '27px',
    top: '50%',
    transform: 'translate(0,-50%)'
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
    <div style={muiTheme.stackLabel}>
      <Chip key={stackLabels} style={muiTheme.chip}>
        <Avatar size={32}>
          {stackLabels[0].charAt(0).toUpperCase()}
        </Avatar>
        {stackLabels[0]}
      </Chip>
    </div>
    <div style={muiTheme.startDate}>
      {startDate && <StartYear startDate={startDate} /> }
    </div>
  </div>
);

const StartYear = ({ startDate }) => (startDate ? startDate.split('-')[0] : '');

const jobItemShape = {
  stackLabels: PropTypes.array,
  startDate: PropTypes.array
};

StackAndDateWrapper.propTypes = {
  stackLabels: PropTypes.objectOf((PropTypes.shape(jobItemShape))),
  startDate: PropTypes.string
};

StackAndDateWrapper.defaultProps = {
  stackLabels: [],
  startDate: null
};

export default StackAndDateWrapper;
