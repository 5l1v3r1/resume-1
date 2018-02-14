import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const muiTheme = getMuiTheme({
  chip: {
    marginRight: 20
  },
  stackLabel: {
    float: 'right',
    position: 'absolute',
    right: '27px',
    top: '50%',
    transform: 'translate(0,-50%)'
  }
});

const StackChip = ({ stackLabels }) => (
  <div style={muiTheme.stackLabel}>
    <Chip key={stackLabels} style={muiTheme.chip}>
      <Avatar size={32}>
        {stackLabels[0].charAt(0).toUpperCase()}
      </Avatar>
      {stackLabels[0]}
    </Chip>
  </div>
);

StackChip.propTypes = {
  stackLabels: PropTypes.arrayOf((PropTypes.string))
};

StackChip.defaultProps = {
  stackLabels: []
};

export default StackChip;
