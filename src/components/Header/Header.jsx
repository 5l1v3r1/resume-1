import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import ResumeBaseTheme from '../../theme/resumeBaseTheme';
import './Header.css';

const Header = ({ handleContactClick, handleHeaderClick }) => (
  <Row middle="xs">
    <Col xs={12} sm={6} md lg={2}>
      <h1>
        <Link to="/" onClick={handleHeaderClick}>Phil Steinke</Link>
      </h1>
    </Col>
    <Col xs={12} sm={6} md>
      <h1>
        <Link
          to="/"
          onClick={handleHeaderClick}
          style={{ color: ResumeBaseTheme.palette.primary1Color }}
        >
          Frontend Developer
        </Link>
      </h1>
    </Col>
    <Col xs={12} sm={12} md={3} lg={3} end="sm">
      <Row end="sm">
        <Col>
          <RaisedButton
            label="Get in touch"
            secondary
            className="contactButton"
            onClick={handleContactClick}
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

Header.propTypes = {
  handleContactClick: PropTypes.func,
  handleHeaderClick: PropTypes.func
};
Header.defaultProps = {
  handleContactClick: null,
  handleHeaderClick: null
};

export default Header;
