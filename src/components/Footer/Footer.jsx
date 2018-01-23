import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Row, Col } from 'react-flexbox-grid';

const muiTheme = getMuiTheme({
  footerLink: {
    textAlign: 'center',
    width: '100%',
    margin: '50px'
  }
});

const Footer = () => (
  <Row>
    <Col xs style={muiTheme.footerLink}>
      <a href="http:tgrrr.com">&copy; tgrrr.com</a><br />
      <a href="http://github.com/tgrrr/resume"> how was this resume made?</a>
    </Col>
  </Row>
);

export default Footer;
