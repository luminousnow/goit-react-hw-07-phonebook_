import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchAllContacts,
  createContact,
  deleteContact,
} from './contacts-operations';
import { filterChange } from './contacts-actions';

// set default store values
const initialState = {
  contacts: {
    item: [],
    filter: '',
    isLoading: false,
    error: null,
  },
};
const itemDefault = initialState.contacts.item;
const filterDefault = initialState.contacts.filter;
const loadingDefault = initialState.contacts.isLoading;
const errorDefault = initialState.contacts.error;

// === reducers === //
const itemReducer = createReducer(itemDefault, {
  [fetchAllContacts.fulfilled]: (_, { payload }) => payload,
  [createContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filterReducer = createReducer(filterDefault, {
  [filterChange]: (_, { payload }) => {
    return payload.query;
  },
});

const loadingReduser = createReducer(loadingDefault, {
  [fetchAllContacts.pending]: () => true,
  [fetchAllContacts.fulfilled]: () => false,
  [fetchAllContacts.rejected]: () => false,
  [createContact.pending]: () => true,
  [createContact.fulfilled]: () => false,
  [createContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const errorReduser = createReducer(errorDefault, {
  [fetchAllContacts.rejected]: (_, { payload }) => alert(payload),
  [fetchAllContacts.pending]: () => null,
  [createContact.rejected]: (_, { payload }) => alert(payload),
  [createContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => alert(payload),
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  item: itemReducer,
  filter: filterReducer,
  loading: loadingReduser,
  error: errorReduser,
});
