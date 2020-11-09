import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PageNotFound from '../pages/ErrorPage';
import Auth from '../Auth0/auth';

function App() {
  const history = useHistory();
  const auth = new Auth(history);

  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <HomePage auth={auth} />}
        />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
