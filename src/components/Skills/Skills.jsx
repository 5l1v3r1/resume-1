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

const Skills = entry => (
  <Row>
    <Col xs={12} sm={2}>
      <FlatButton label={entry.skill.fields.stackLabels} primary />
    </Col>
    <Col xs={12} sm={10}>
      <div style={muiTheme.chipWrapper}>
        {/* {JSON.stringify(this.props.skill.fields.stack)} */}
        {
          entry.skill.fields.stack.map((stackio, i) => (
            <Chip key={i} style={muiTheme.chip}>
              <Avatar size={32}>
                {String(stackio).charAt(0)}
              </Avatar>
              {stackio}
            </Chip>
          ))
        }
      </div>
    </Col>
  </Row>
);

const skillsItemShape = {
  stack: PropTypes.objectOf,
  stackLabels: PropTypes.objectOf
};

Skills.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(skillsItemShape))).isRequired
};

export default Skills;
