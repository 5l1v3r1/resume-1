import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../Menu/Menu';

const routes = [
  { path: '/:careerCategory/:project' },
  { path: '/:careerCategory/' },
  { path: '/' }
];

// const MenuPlaceholder = () => (
//   <Menu
//     initJobExpanded={match.params.project}
//     {...props}
//   />
// );

const MenuRouter = props => (

  <Switch>
    {routes.map(route => (
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
    ))}
  </Switch>
);

export default MenuRouter;
