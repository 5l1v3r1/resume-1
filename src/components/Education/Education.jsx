import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Education.css';

const Education = ({ entries }) => (
  <div>
    {entries
      .filter(entry => entry.sys.contentType.sys.id === 'education')
      .map((entry, i) => (
        <Row className="Education" key={entry.fields.institution['en-US']}>
          <Col xs={12} sm={8}>
            <strong>{entry.fields.institution['en-US']}</strong>
          </Col>
          <Col xs={12} sm={4}>
            <Row end="sm">
              <Col xs>
                <div className="Education__date">
                  {entry.fields.yearRange['en-US']}
                </div>
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
