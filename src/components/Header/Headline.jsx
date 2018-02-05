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
    float: 'left'
  },
  profilePhotoWrapper: {
    margin: 30
  },
  headlineDescription: {
    textAlign: 'justify'
  }
});

const Child = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'jobTypes' &&
            props.jobType === entry.fields.jobType['en-US']))
  .map((entry, i) => (
    <Row key={entry}>
      <Col xs={1} >
        <img
          src={profilePhoto}
          alt="Phil Steinke"
          style={muiTheme.profilePhoto}
        />
      </Col>
      <Col xsOffset={1} xs={10} style={muiTheme.headlineDescription}>
        {entry.fields.description['en-US']}
      </Col>
    </Row>
  ));

const Headline = props => (
  <Switch>
    <Route exact path="/contact" component={ContactModal} />
    <Route
      exact
      path={props.jobTypes}
      render={({ location }) => <Child {...props} path={location.pathname} />}
    />
  </Switch>
);

Headline.propTypes = {
  jobTypes: PropTypes.string
};

Headline.defaultProps = {
  jobTypes: null
};

export default Headline;
