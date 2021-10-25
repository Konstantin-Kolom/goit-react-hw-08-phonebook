import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import authOperations from './redux/auth/authOperations';
import { Navigation } from './components/Novigation/Novigation';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import PhoneBook from './components/Phonebook/Phonebook';

const HomePageViews = lazy(() =>
  import('./views/HomePageViews.jsx' /* webpackChunkName: "Home-views" */),
);
const RegisterViews = lazy(() =>
  import('./views/RegisterViews.jsx' /* webpackChunkName: "Home-views" */),
);
const LoginViews = lazy(() =>
  import('./views/LoginViews.jsx' /* webpackChunkName: "Home-views" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <header className="App-header">
        <Navigation />
      </header>

      <Switch>
        <Suspense fallback={<p>Loding...</p>}>
          <PublicRoute exact path="/">
            <HomePageViews />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegisterViews />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <LoginViews />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <PhoneBook />
          </PrivateRoute>

          {/* <Route path="*">
            <Redirect to="/" />
            <HomePageViews />
          </Route> */}
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
