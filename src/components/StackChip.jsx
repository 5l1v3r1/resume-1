import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import './StackChip.css';

const StackChip = ({ stackLabels }) => (
  <div className="StackLabel">
    <Chip key={stackLabels} className="Chip" >
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
