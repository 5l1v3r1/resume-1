import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import './Skills.css';

const Skills = ({ entry }) => (
  <div className=".Skills__wrapper">
    {entry.stack['en-US'].map((stackItem, i) => (
      entry.stack &&
        <Skill key={stackItem} stack={stackItem} />
    ))}
  </div>
);

const Skill = ({ stack }) => (
  <Chip className="Skills__Chip {">
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
