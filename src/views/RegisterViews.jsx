import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsFillPersonPlusFill } from '../../node_modules/react-icons/bs';
import { RiLockPasswordLine } from '../../node_modules/react-icons/ri';
import { RiMailAddLine } from '../../node_modules/react-icons/ri';

import s from './css/Register.module.css';
import authOperations from '../redux/auth/authOperations';

export default function RegisterViews() {
  const dispatch = useDispatch();
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return SetName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    SetName('');
    SetEmail('');
    SetPassword('');
  };

  return (
    <div className={s.box}>
      <h2>Please enter your details:</h2>
      <form className={s.ContactEntryForm} onSubmit={hendleSubmit}>
        <label className={s.NameInputField}>
          <span className={s.iconForm}>
            <BsFillPersonPlusFill />
          </span>
          <span className={s.inputName}>Name:</span>
          <input
            className={s.ContactInputForm}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter your name"
            required
            onChange={hendleChange}
          />
        </label>

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
          Registration
        </button>
      </form>
    </div>
  );
}
