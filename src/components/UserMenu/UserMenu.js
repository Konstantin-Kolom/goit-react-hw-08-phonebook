import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import defaultAvatar from '../../images/preview.jpg';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.box}>
      <img src={avatar} alt="" width="32" className={s.img}></img>
      <p className={s.text_title}>Welcome, {name}</p>
      <button type="button" className={s.Btn} onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
    </div>
  );
}
