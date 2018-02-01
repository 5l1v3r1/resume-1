import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../Menu/Menu';

const routes = [
  { path: '/:jobType/:project' },
  { path: '/:jobType/' },
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
    {routes.map((route, i) => (
      <Route
        exact
        key={i}
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
