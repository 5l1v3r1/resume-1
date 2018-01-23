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

const Education = (educations) => {
  return (
    <div>
    <Row>
      <Col xs={12}>
        <h1>Education</h1>
      </Col>
    </Row>

{/* {props.jobs.map((job, i) =>  */}
    {/* {props.education.map((prop, i) => { */}
      {/* return ( */}
        <Row /*key={i}*/ style={muiTheme.education}>
          <Col xs={12} sm={8}>
            {/* <strong>{prop.fields.institution}</strong> */}
          </Col>
          <Col xs={12} sm={4}>
            <Row end="sm">
              <Col xs>
                2017
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            From React Router’s creators
          </Col>
        </Row>
      {/* ) */}
    {/* })} */}

    {/* {console.log(educations[0].fields)} */}


    <Row style={muiTheme.education}>
      <Col xs={12} sm={8}>
        <strong>React Training</strong>
      </Col>
      <Col xs={12} sm={4}>
        <Row end="sm">
          <Col xs>
            2017
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        From React Router’s creators
      </Col>
    </Row>
    <Row style={muiTheme.education}>
      <Col xs={8}>
        <strong>A Cloud Guru</strong>
      </Col>
      <Col xs={12} sm={4}>
        <Row end="sm">
          <Col xs>
            2017
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        AWS Serverless Certification
      </Col>
    </Row>
    <Row style={muiTheme.education}>
    <Col xs={12} sm={8}>
      <strong>University of NSW</strong>
    </Col>
    <Col xs={12} sm={4}>
      <Row end="sm">
        <Col xs>
          2007 – 2008
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      Bachelor of Arts (Honours)<br />
      <i>Open Source Software, Leadership and Business Ethics</i>
    </Col>
    </Row>
    <Row style={muiTheme.education}>
      <Col xs={12} sm={8}>
        <strong>University of Wollongong</strong>
      </Col>
      <Col xs={12} sm={4}>
        <Row end="sm">
          <Col xs>
            2001 – 2002
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        Bachelor of Commerce<br />
        <i>Management and International Relations</i>
      </Col>
    </Row>
  </div>
  );
}

export default Education;
