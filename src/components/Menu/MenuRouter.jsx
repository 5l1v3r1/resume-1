import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../Menu/Menu';

const MenuRouter = props => (

  <Switch>
    <Route
      exact
      path="/:careerCategory/:project"
      render={({ match }) => (
        <Menu
          initJobExpanded={match.params.project}
          {...props}
        />
      )}
    />
    <Route
      exact
      path="/:careerCategory"
      render={({ match }) => (
        <Menu
          initJobExpanded={match.params.project}
          {...props}
        />
      )}
    />
    <Route
      exact
      path="/"
      render={({ match }) => (
        <Menu
          initJobExpanded={match.params.project}
          {...props}
        />
      )}
    />
    <Route
      render={({ match }) => (
        <Menu
          initJobExpanded={match.params.project}
          {...props}
        />
      )}
    />
  </Switch>
);

export default MenuRouter;
