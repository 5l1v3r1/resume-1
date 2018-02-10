import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../Menu/Menu';

const routes = [
  { path: '/' },
  { path: '/:careerCategory/:project' },
  { path: '/:careerCategory/' }
];

const MenuRouter = props => (

  <Switch>
    {routes.map(route => (
      <Route
        exact
        key={route}
        path={route.path}
        render={({ match }) => (
          <Menu
            initJobExpanded={match.params.project}
            {...props}
          />
        )}
      />
    ))}
  </Switch>
);

export default MenuRouter;
