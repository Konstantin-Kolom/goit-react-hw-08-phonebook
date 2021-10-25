import { createAction } from '@reduxjs/toolkit';

const openBook = createAction('phonebook/open', data => {
  return {
    payload: data,
  };
});

const addContact = createAction('phonebook/add', ({ name, number }) => {
  return {
    payload: {
      name: name,
      number: number,
    },
  };
});

const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, changeFilter, openBook };
