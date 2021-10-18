import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

const openBook = createAction('phonebook/open', data => {
  return {
    payload: data,
  };
});

const addContact = createAction('phonebook/add', ({ name, number }) => {
  return {
    payload: {
      // id: shortid.generate(name),
      name: name,
      number: number,
    },
  };
});

const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, changeFilter, openBook };
