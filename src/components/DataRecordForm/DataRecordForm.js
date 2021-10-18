import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-hot-toast';

import phoneAticons from '../../redux/phonebook/phonebookActions';
import { FaPhoneSquareAlt } from '../../../node_modules/react-icons/fa';
import { BsFillPersonPlusFill } from '../../../node_modules/react-icons/bs';
import { useCreateContactMutation } from '../../redux/phonebook/phonebookSlice';
import s from './DataRecordForm.module.css';

function DataRecordForm({ items, addContact }) {
  const [name, SetName] = useState('');
  const [number, SetNumber] = useState('');

  const [createContact, { isLoading }] = useCreateContactMutation();

  const hendleChangeName = e => {
    const value = e.currentTarget.value;
    SetName(value);
  };

  const hendleChangeNumber = e => {
    const value = e.currentTarget.value;
    SetNumber(value);
  };

  const hendleSubmit = e => {
    e.preventDefault();

    if (items.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return toast.error(`"${name}" is already in contacts!`);
    } else createContact({ name, number });
    addContact({ name, number });
    toast.success('The contact is added to the phone book!');
    reset();
  };

  const reset = () => {
    SetName('');
    SetNumber('');
  };

  return (
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
          placeholder="Enter contact name"
          required
          onChange={hendleChangeName}
        />
      </label>

      <label className={s.NameInputField}>
        <span className={s.iconForm}>
          <FaPhoneSquareAlt />
        </span>
        <span className={s.inputName}>Number:</span>
        <input
          className={s.ContactInputForm}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Enter contact number"
          required
          onChange={hendleChangeNumber}
        />
      </label>

      <button className={s.btnFormContact} type="submit">
        {isLoading ? 'Adding...' : ' Add contact'}
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return state.contacts;
};

const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(phoneAticons.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataRecordForm);
