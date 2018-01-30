import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Row, Col } from 'react-flexbox-grid';

const muiTheme = getMuiTheme({
  careerHeadline: {
    margin: '30px 0'
  }
});

const LeftHeadline = props => (
  <div>
    {/* {if headline:} */}
    <Row style={muiTheme.careerHeadline}>
      <Col xs={12} md={2}>
        <h3>{props.children.props.name}</h3>
      </Col>
      <Col xs={12} md={8}>
        {props.children}
      </Col>
    </Row>
  </div>
);

export default LeftHeadline;