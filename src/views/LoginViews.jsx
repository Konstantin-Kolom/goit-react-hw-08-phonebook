import { useState } from 'react';
// import { BsFillPersonPlusFill } from '../../node_modules/react-icons/bs';
import { RiLockPasswordLine } from '../../node_modules/react-icons/ri';
import { RiMailAddLine } from '../../node_modules/react-icons/ri';

import s from './css/Register.module.css';

export default function LoginViews() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const hendleChangeEmail = e => {
    const value = e.currentTarget.value;
    SetEmail(value);
  };

  const hendleChangePassword = e => {
    const value = e.currentTarget.value;
    SetPassword(value);
  };

  const hendleSubmit = e => {
    e.preventDefault();
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
            onChange={hendleChangeEmail}
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
            onChange={hendleChangePassword}
          />
        </label>

        <button className={s.btnFormContact} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
