import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  delContact,
} from '../../servises/apiContacts';

// fetchAllContacts thunk
export const fetchAllContacts = createAsyncThunk(
  'contact/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

// createContact thunk
export const createContact = createAsyncThunk(
  'contact/create',
  async ({ name, number }, { rejectWithValue }) => {
    const newContact = {
      name,
      number,
    };

    try {
      const contact = await addContact(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// deleteContact thunk
export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (contactId, { rejectWithValue }) => {
    try {
      const contact = await delContact(contactId);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
