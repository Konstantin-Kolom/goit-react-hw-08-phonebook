import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';

import s from './Novigation.module.css';

export const Navigation = () => {
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
      <UserMenu />
    </nav>
  );
};
