import React from 'react';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Route, Switch } from 'react-router-dom';
import ContactModal from './ContactModal';
import profilePhoto from '../../images/philsteinke mugshot bw.png';
import './Headline.css';

const Headline = props => (
  <Switch>
    <Route
      exact
      path="/"
      render={({ location }) =>
        <Child {...props} />
      }
    />
    <Route
      exact
      path="/contact"
      render={({ location }) =>
        (
          <Row between="xs">
            <ContactModal {...props} path={location.pathname} />
          </Row>
        )
      }
    />
    <Route
      exact
      path={props.jobTypes}
      render={({ location }) =>
        <Child {...props} />
      }
    />
  </Switch>
);

const Child = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'jobTypes' &&
            props.headline.toLowerCase() === entry.fields.jobType['en-US'].toLowerCase()))
  .map(entry => (
    <div key={entry}>
      <Row middle="xs" center="xs">
        <Col xs={12} sm={2}>
          <img src={profilePhoto} alt="Phil Steinke" className="ProfilePhoto" />
        </Col>
        <Col xs={12} sm={10} className="headlineDescription">
          {entry.fields.description['en-US']}
        </Col>
      </Row>
    </div>
  ));

Headline.propTypes = {
  jobTypes: PropTypes.string,
  headline: PropTypes.string

};

Headline.defaultProps = {
  jobTypes: null,
  headline: null
};

export default Headline;
