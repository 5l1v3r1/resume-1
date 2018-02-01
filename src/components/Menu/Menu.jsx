import React from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Tabs, Tab } from 'material-ui/Tabs';
import Jobs from '../Jobs/Jobs';

const muiTheme = getMuiTheme({
  tab: {
    margin: '0 5px'
  }
});

const jobTypes = ['Apps', 'Websites', 'Projects', 'Content'];

const Menu = ({ jobType, handleMenuChange, ...rest }) => (
  <Row>
    <Col xs>
      <Tabs value={jobType} onChange={handleMenuChange}>
        {jobTypes.map((jobTypeHeader, i) => (
          <Tab
            key={i}
            label={jobTypeHeader}
            value={jobTypeHeader}
            style={muiTheme.tab}
          >
            <Jobs jobType={jobType} {...rest} />
          </Tab>
        ))}
      </Tabs>
    </Col>
  </Row>
);

Menu.propTypes = {
  jobType: PropTypes.oneOf(['Apps', 'Websites', 'Content', 'Projects']).isRequired,
  handleMenuChange: PropTypes.func,
  isInitJobExpanded: PropTypes.bool
};

Menu.defaultProps = {
  handleMenuChange: null,
  isInitJobExpanded: false
};

export default Menu;
