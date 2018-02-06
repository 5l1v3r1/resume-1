import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import ResumeBaseTheme from '../../theme/resumeBaseTheme';

const muiTheme = getMuiTheme({
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    display: 'inline-block',
    alignContent: 'center'
  },
  raisedButton: {
    marginTop: '21px',
    float: 'right'
  }
});

const Header = () => (
  <Row>
    <Col xs={12} sm={6} md={2} lg={2}>
      <h1>Phil Steinke</h1>
    </Col>
    <Col xs={12} sm={6} md={6} lg={6}>
      <h1 style={{ color: ResumeBaseTheme.palette.primary1Color }}>Frontend Developer</h1>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
      <RaisedButton
        containerElement={<Link to="/contact" />}
        label="Get in touch"
        secondary
        style={muiTheme.raisedButton}
      />
    </Col>
  </Row>
);

export default Header;
