import React from 'react';
import PropTypes from 'prop-types';
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

const Header = ({ handleContactClick, handleHeaderClick }) => (
  <Row>
    <Col xs={6} sm={6} md={2} lg={2}>
      <h1>
        <Link to="/" onClick={handleHeaderClick}>Phil Steinke</Link>
      </h1>
    </Col>
    <Col xs={6} sm={6} md={6} lg={6}>
      <h1 style={{ color: ResumeBaseTheme.palette.primary1Color }}>
        <Link to="/" onClick={handleHeaderClick}>Frontend Developer</Link>
      </h1>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
      <RaisedButton
        label="Get in touch"
        secondary
        style={muiTheme.raisedButton}
        onClick={handleContactClick}
      />
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
