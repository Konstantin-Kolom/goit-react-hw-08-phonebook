import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import authSelectors from '../redux/auth/authSelectors';

export default function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>{shouRedirect ? <Redirect to="/contacts" /> : children}</Route>;
}
