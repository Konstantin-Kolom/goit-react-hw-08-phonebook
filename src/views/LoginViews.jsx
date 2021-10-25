import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { RiLockPasswordLine } from '../../node_modules/react-icons/ri';
import { RiMailAddLine } from '../../node_modules/react-icons/ri';

import s from './css/Register.module.css';
import authOperations from '../redux/auth/authOperations.js';

export default function LoginViews() {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return SetEmail(value);
      case 'password':
        return SetPassword(value);
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    SetEmail('');
    SetPassword('');
  };

  return (
    <div className={s.box}>
      <h2>Please enter your email and password:</h2>
      <form className={s.ContactEntryForm} onSubmit={hendleSubmit}>
        <label className={s.NameInputField}>
          <span className={s.iconForm}>
            <RiMailAddLine />
          </span>
          <span className={s.inputName}>Email:</span>
          <input
            className={s.ContactInputForm}
            type="email"
            name="email"
            value={email}
            // pattern=".+@"
            title="Three or more characters"
            placeholder="Enter your password"
            required
            onChange={hendleChange}
          />
        </label>

        <label className={s.NameInputField}>
          <span className={s.iconForm}>
            <RiLockPasswordLine />
          </span>
          <span className={s.inputName}>Password:</span>
          <input
            className={s.ContactInputForm}
            type="password"
            name="password"
            value={password}
            pattern=".{3,}"
            title="Enter your email"
            placeholder="Enter your password"
            required
            onChange={hendleChange}
          />
        </label>

        <button className={s.btnFormContact} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
