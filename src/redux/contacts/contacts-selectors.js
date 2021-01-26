// === Create default array by using Filter value === //

export const getAllContacts = state => state.contacts.item;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const allContacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};
