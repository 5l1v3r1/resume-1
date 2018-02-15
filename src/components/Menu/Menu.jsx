import React from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Tabs, Tab } from 'material-ui/Tabs';
import Jobs from '../Jobs/Jobs';
import './Menu.css';

const jobTypes = [
  'Apps',
  'Websites',
  'Content Marketing',
  'Projects'
];

const Menu = ({ jobType, handleMenuChange, ...rest }) => (
  <Row>
    <Col xs>
      <Tabs value={jobType} onChange={handleMenuChange}>
        {jobTypes.map(jobTypeHeader => (
          <Tab
            key={jobTypeHeader}
            label={jobTypeHeader}
            value={jobTypeHeader}
            className="tab"
          >
            <Jobs jobType={jobType} {...rest} />
          </Tab>
        ))}
      </Tabs>
    </Col>
  </Row>
);

Menu.propTypes = {
  jobType: PropTypes.oneOf(['Apps', 'Websites', 'Content Marketing', 'Projects', 'About', 'Contact']).isRequired,
  handleMenuChange: PropTypes.func,
  isInitJobExpanded: PropTypes.bool
};

Menu.defaultProps = {
  handleMenuChange: null,
  isInitJobExpanded: false
};

export default Menu;
