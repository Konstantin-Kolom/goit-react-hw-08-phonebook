import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import authOperations from './redux/auth/authOperations';
import { Navigation } from './components/Novigation/Novigation';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import PhoneBook from './components/Phonebook/Phonebook';
import authSelectors from './redux/auth/authSelectors';

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
  const isRefreshingUser = useSelector(authSelectors.getRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <header className="App-header">
        <Navigation />
      </header>
      {!isRefreshingUser && (
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
      )}
    </>
  );
}

export default App;
