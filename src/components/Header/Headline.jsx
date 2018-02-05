import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
  }
});

const Child = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'jobTypes' &&
            props.jobType === entry.fields.jobType['en-US']))
  .map((entry, i) => (
    <div key={entry}>
      <img
        src={profilePhoto}
        alt="Phil Steinke"
        style={muiTheme.profilePhoto}
      />
      {entry.fields.description['en-US']}
    </div>
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
