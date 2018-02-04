import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const muiTheme = getMuiTheme({
  chip: {
    margin: 4,
    float: 'left'
  },
  chipWrapper: {
    display: 'block'
  }
});

const Skills = ({ entry }) => (
  <div style={muiTheme.chipWrapper}>
    {entry.stack['en-US'].map((stackItem, i) => (
      entry.stack &&
        <Skill key={stackItem} stack={stackItem} />
    ))}

  </div>
);

const Skill = ({ stack }) => (
  <Chip style={muiTheme.chip}>
    <Avatar size={32}>{String(stack).charAt(0)}</Avatar>
    { stack }
  </Chip>
);

const skillsItemShape = {
  stack: PropTypes.objectOf
};

Skills.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(skillsItemShape))).isRequired
};

Skill.propTypes = {
  stack: PropTypes.string
};

Skill.defaultProps = {
  stack: null
};

export default Skills;
