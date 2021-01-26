import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

// get all contacts from db.json
async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

// send new contact to db.json
async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

// delete contact by ID from db.json
async function delContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}

export { fetchContacts, addContact, delContact };
