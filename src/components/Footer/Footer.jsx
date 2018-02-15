import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Github from '../../images/GitHub-Mark/PNG/GitHub-Mark-32px.png';

const Footer = () => (
  <Row middle="xs" center="xs">
    <Col xs={1}>
      <a href="http://github.com/tgrrr/resume">
        <img src={Github} alt="Resume on Github" />
      </a>
    </Col>
    <Col xs={4}>
      <a href="http://github.com/tgrrr/resume">
        View this expandable resume on Github
      </a>
    </Col>
  </Row>
);

export default Footer;
