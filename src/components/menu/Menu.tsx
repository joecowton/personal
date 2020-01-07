import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes, { RouteOptions } from './Menu.routes';

import * as S from './Menu.styles';

export default () => {
  return (
    <S.Menu>
      <Router>
        <S.MenuInner>
          <S.Title>Joe Cowton</S.Title>
          <S.StyledLink activeClassName="active" to="/work">
            Work
          </S.StyledLink>
          <S.StyledLink activeClassName="active" to="/shows">
            Shows
          </S.StyledLink>
          <S.StyledLink activeClassName="active" to="/listen">
            Listen
          </S.StyledLink>
          <S.Routes>
            <Switch>
              {routes.map((route: RouteOptions) => (
                <Route
                  key={route.path}
                  {...route}
                  component={route.component}
                />
              ))}
            </Switch>
          </S.Routes>
        </S.MenuInner>
      </Router>
    </S.Menu>
  );
};
