import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  card: {
    margin: 5
  },
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

const StackAndDateWrapper = ({ entry }) => (
  <div style={muiTheme.headerRight}>
    <div style={muiTheme.stackLabel}>
      {entry.stackLabels &&
        <Chip key={entry.stackLabels} style={muiTheme.chip}>
          <Avatar size={32}>
            {entry.stackLabels['en-US'][0].charAt(0).toUpperCase()}
          </Avatar>
          {entry.stackLabels['en-US'][0]}
        </Chip>
      }
    </div>
    <div style={muiTheme.startDate}>
      {entry.startDate && <StartYear entry={entry} /> }
    </div>
  </div>
);

const StartYear = ({ entry }) => (entry.startDate ? entry.startDate['en-US'].split('-')[0] : '');

const jobItemShape = {
  stackLabels: PropTypes.array,
  startDate: PropTypes.array
};

StackAndDateWrapper.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(jobItemShape))).isRequired
};

export default StackAndDateWrapper;
