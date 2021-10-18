import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import phonebookReducer from './phonebook/phonebookReducer';
import { contactsApi } from './phonebook/phonebookSlice';

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// getDefaultMiddleware().concat(logger);
