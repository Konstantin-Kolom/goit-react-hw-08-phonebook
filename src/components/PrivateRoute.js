import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import authSelectors from '../redux/auth/authSelectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>;
}
