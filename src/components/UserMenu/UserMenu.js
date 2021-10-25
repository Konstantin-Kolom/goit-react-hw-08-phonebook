import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  // const avatar =

  return (
    <div className={s.box}>
      <img alt=""></img>
      <p>Welcome, {name}</p>
      <button type="button" className={s.Btn} onClick={() => dispatch(authOperations.logOut)}>
        Exit
      </button>
    </div>
  );
}
