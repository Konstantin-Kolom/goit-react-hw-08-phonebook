import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import authSelectors from '../redux/auth/authSelectors';
import s from './css/HomePage.module.css';

export default function HomePageViews() {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const IslocalToken = useSelector(authSelectors.getToken);
  const userLogginIn = IsLoggedIn === true;
  const userLogOut = IslocalToken === null;

  return (
    <section className={s.section}>
      <div>
        <h1 className={s.title}>Welcome!</h1>
        <p className={s.text}>Service - You phonebook</p>
      </div>
      {userLogginIn && (
        <div className={s.box}>
          <p className={s.box_text}>You are logged in to the service. Enjoy your use.</p>;
        </div>
      )}

      {userLogOut && (
        <div className={s.box}>
          <p className={s.box_text}>Please enter your login or register to use the application:</p>
          <Link to="/register">
            <button type="button" className={s.box_btn}>
              Registration
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className={s.box_btn}>
              Login
            </button>
          </Link>
        </div>
      )}

      {/* {IsLoggedIn && localToken !== null ? (
        <div className={s.box}>
          <p className={s.box_text}>You are logged in to the service. Enjoy your use.</p>;
        </div>
      ) : (
        <div className={s.box}>
          <p className={s.box_text}>Please enter your login or register to use the application:</p>
          <Link to="/register">
            <button type="button" className={s.box_btn}>
              Registration
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className={s.box_btn}>
              Login
            </button>
          </Link>
          ;
        </div>
      )} */}
    </section>
  );
}
