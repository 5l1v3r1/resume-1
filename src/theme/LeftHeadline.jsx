import React from 'react';
import startCase from 'lodash.startcase';
import { Row, Col } from 'react-flexbox-grid';
import './LeftHeadline.css';

const LeftHeadline = props => (
  <Row className="CareerHeadline">
    <Col xs={12} md={2}>
      <h3>{startCase(props.name)}</h3>
    </Col>
    <Col xs={12} md={10}>
      {props.children}
    </Col>
  </Row>
);

export default LeftHeadline;
