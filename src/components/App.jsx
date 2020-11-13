import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../pages/HomePage';
import PageNotFound from '../pages/ErrorPage';
import Auth from '../Auth0/auth';
import Navbar from './Navbar';
import CarListPage from '../pages/CarListPage';
import Callback from './Callback';
import SingleCarPage from '../pages/SingleCarPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const history = useHistory();
  const auth = new Auth(history);

  return (
    <>
      <Navbar auth={auth} />
      <Switch>
        <Route path="/" exact render={() => <HomePage auth={auth} />} />
        <Route path="/callback" render={() => <Callback auth={auth} />} />
        <Route
          path="/car-list"
          // eslint-disable-next-line no-confusing-arrow
          render={() => auth.isAuthenticated() ? (
            <CarListPage auth={auth} />
          ) : (
            auth.login()
          )}
        />
        <Route
          path="/car/:id"
          // eslint-disable-next-line no-confusing-arrow
          render={() => auth.isAuthenticated() ? (
            <SingleCarPage auth={auth} />
          ) : (
            auth.login()
          )}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
