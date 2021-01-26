import React from 'react';
import Container from './components/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList';

function App() {
  return (
    <>
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm />
        </Section>

        <Section>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Section>
      </Container>
    </>
  );
}

export default App;
