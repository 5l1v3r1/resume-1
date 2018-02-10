import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Route, Switch } from 'react-router-dom';
import ContactModal from './ContactModal';
import profilePhoto from '../../images/philsteinke mugshot bw.png';

const muiTheme = getMuiTheme({
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 80,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  profilePhotoWrapper: {
    height: '100%',
    width: '100%',
    minHeight: 100,
    minWidth: 100,
    position: 'relative'
  },
  headlineDescription: {
    textAlign: 'justify'
  }
});

const Headline = props => (
  <Switch>
    <Route
      exact
      path="/"
      render={({ location }) =>
        <Child {...props} path="/" />
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
        <Child {...props} path={location.pathname} />
      }
    />
  </Switch>
);

const Child = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'jobTypes' &&
            props.headline === entry.fields.jobType['en-US']))
  .map(entry => (
    <div key={entry}>
      <Row>
        <Col xs={12} sm={2} style={muiTheme.profilePhotoWrapper}>
          <img src={profilePhoto} alt="Phil Steinke" style={muiTheme.profilePhoto} />
        </Col>
        <Col xs={12} sm={10} style={muiTheme.headlineDescription}>
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
