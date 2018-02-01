import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Row, Col } from 'react-flexbox-grid';

const muiTheme = getMuiTheme({
  education: {
    margin: '10px 0'
  },
  date: {
    textAlign: 'right'
  }
});

const Education = ({ jobs }) => (
  <div>
    {jobs
      .filter(entry => entry.fields.institution)
      .map((entry, i) => (
        <Row style={muiTheme.education} key={i}>
          <Col xs={12} sm={8}>
            <strong>{entry.fields.institution['en-US']}</strong>
          </Col>
          <Col xs={12} sm={4}>
            <Row end="sm">
              <Col xs>
                {entry.fields.yearRange['en-US']}
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            {entry.fields.qualification['en-US']}
          </Col>
          <Col xs={12}>
            <i>{entry.fields.focus && entry.fields.focus['en-US'] }</i>
          </Col>
        </Row>
      ))}
  </div>
);

export default Education;
