import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Row, Col} from 'react-flexbox-grid';

const muiTheme = getMuiTheme({
  education: {
    margin: '10px 0'
  },
  date: {
    textAlign: 'right'
  }
});

// const Jobs = props =>
//   (props.jobs.map((job, i) => (
//     <Job
//       key={job.fields.project['en-US']}
//       id={i}
//       job={job}
//       isJobExpanded={(job.fields.project['en-US'] === props.initJobExpanded)}
//     />
//   )));

const Education = ({jobs}) => (
  <div>
    <Row>
      <Col xs={12}>
        <h1>Education</h1>
      </Col>
    </Row>
    {jobs.map((job, i) => (
      <div key={i}>
        {job.fields.institution ?
          <Row style={muiTheme.education}>
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
              <i>{job.fields.focus ? job.fields.focus['en-US'] : null }</i>
            </Col>
          </Row>
          : null
        }
      </div>
    ))}
  </div>
);

export default Education;
