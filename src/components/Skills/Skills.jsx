import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { Row, Col } from 'react-flexbox-grid';

const muiTheme = getMuiTheme({
  chip: {
    margin: 4
  },
  chipWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const Skills = ({ entry }) => (
  entry.stack['en-US'].map((stackItem, i) =>
    <Skill key={i} id={i} stack={stackItem} />));

const Skill = ({ stack }) => (
  <Chip style={muiTheme.chip}>
    <Avatar size={32}>{String(stack).charAt(0)}</Avatar>
    {stack}
  </Chip>
);

const skillsItemShape = {
  stack: PropTypes.objectOf
};

Skills.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(skillsItemShape))).isRequired,
  stack: PropTypes.objectOf.isRequired
};

export default Skills;
