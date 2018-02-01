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
      .filter(job => job.fields.institution)
      .map((job, i) => (
        <Row style={muiTheme.education} key={i}>
          <Col xs={12} sm={8}>
            <strong>{job.fields.institution['en-US']}</strong>
          </Col>
          <Col xs={12} sm={4}>
            <Row end="sm">
              <Col xs>
                {job.fields.yearRange['en-US']}
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            {job.fields.qualification['en-US']}
          </Col>
          <Col xs={12}>
            <i>{job.fields.focus && job.fields.focus['en-US'] }</i>
          </Col>
        </Row>
      ))}
  </div>
);

export default Education;
