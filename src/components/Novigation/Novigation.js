import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/authSelectors';
import s from './Novigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.navBox}>
      <div>
        <NavLink exact to="/" className={s.navLink} activeClassName={s.navLinkActive}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={s.navLink} activeClassName={s.navLinkActive}>
          Phonebook
        </NavLink>
      </div>
      {isLoggedIn && <UserMenu />}
    </nav>
  );
};
