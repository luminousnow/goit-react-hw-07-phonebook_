import s from './ContactList.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactListItem from './ContactListItem';

function ContactList() {
  const contactList = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAllContacts()), [dispatch]);

  return (
    <>
      {contactList.length ? (
        <ul className={s.contactList}>
          {contactList.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => dispatch(deleteContact(id))}
            />
          ))}
        </ul>
      ) : (
        <p>Не знайдено жодного контакту</p>
      )}
    </>
  );
}

export default ContactList;
