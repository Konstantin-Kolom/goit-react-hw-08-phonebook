import { useState } from 'react';
import { BsFillPersonPlusFill } from '../../node_modules/react-icons/bs';

import s from './css/Register.module.css';

export default function RegisterViews() {
  const [name, SetName] = useState('');
  //   const [email, SetEmail] = useState('');

  const hendleChangeName = e => {
    const value = e.currentTarget.value;
    SetName(value);
  };
  const hendleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={s.box}>
      <h2>Please enter your details:</h2>
      <form className="s.ContactEntryForm" onSubmit={hendleSubmit}>
        <label className="s.NameInputField">
          <span className={s.iconForm}>
            <BsFillPersonPlusFill />
          </span>
          <span className="{s.inputName}">Name:</span>
          <input
            className="s.ContactInputForm"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter your name"
            required
            onChange={hendleChangeName}
          />
        </label>

        <button className={s.btnFormContact} type="submit">
          Registe
        </button>
      </form>
    </div>
  );
}
