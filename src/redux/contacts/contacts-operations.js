import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  delContact,
} from '../../servises/apiContacts';

// fetchAllContacts thunk
export const fetchAllContacts = createAsyncThunk('contact/fetch', async () => {
  const contacts = await fetchContacts();
  return contacts;
});

// createContact thunk
export const createContact = createAsyncThunk(
  'contact/create',
  async ({ name, number }) => {
    const newContact = {
      name,
      number,
    };
    const contact = await addContact(newContact);
    return contact;
  },
);

// deleteContact thunk
export const deleteContact = createAsyncThunk(
  'contact/delete',
  async contactId => {
    const contact = await delContact(contactId);
    return contact;
  },
);
