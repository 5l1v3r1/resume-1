import React from 'react';
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

const Skills = props => (
  <Row>
    <Col xs={12} sm={2}>
      <FlatButton label={props.skill.fields.stackLabels} primary />
    </Col>
    <Col xs={12} sm={10}>
      <div style={muiTheme.chipWrapper}>
        {/* {JSON.stringify(this.props.skill.fields.stack)} */}
        {
          props.skill.fields.stack.map((stackio, i) => (
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

export default Skills;
