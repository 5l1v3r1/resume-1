import React from 'react';
import { Route } from 'react-router-dom';
import Menu from '../Menu/Menu';

const routes = [
  { path: '/' },
  { path: '/:jobType/:project' },
  { path: '/:jobType/' }
];

const MenuRouter = props => (

  routes.map(route => (
    <Route
      exact
      key={route.path}
      path={route.path}
      render={({ match }) => (
        <Menu
          initJobExpanded={match.params.project}
          {...props}
        />
      )}
    />
  ))
);

export default MenuRouter;
