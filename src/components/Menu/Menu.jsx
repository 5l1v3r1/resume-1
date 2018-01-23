import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Tabs, Tab } from 'material-ui/Tabs';
import Jobs from '../Job/Jobs';

const muiTheme = getMuiTheme({
  tab: {
    margin: '0 5px'
  }
});

const tabsHeaders = ['Apps', 'Websites', 'Product', 'Film'];

const Menu = ({ careerCategory, handleMenuChange, ...rest }) => (
  <Row>
    <Col xs>
      <Tabs value={careerCategory} onChange={handleMenuChange}>
        {tabsHeaders.map((tabsHeader, i) => (
          <Tab key={i} label={tabsHeader} value={tabsHeader} style={muiTheme.tab}>
            <Jobs {...rest} />
          </Tab>
        ))}
      </Tabs>
    </Col>
  </Row>
);

export default withRouter(Menu);
