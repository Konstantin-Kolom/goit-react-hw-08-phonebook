import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './phonebookActions';

const items = createReducer([], {
  [actions.openBook]: (_, { payload }) => [...payload],
  [actions.addContact]: (state, { payload }) => [...state, payload],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// export default combineReducers({ items, filter, entities, isLoading, error });
export default combineReducers({ items, filter });
