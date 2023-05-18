import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './section/Section';
import { FormContact } from './formContact/FormContact';
import { SearchContact } from './searchContact/SearchContact';
import { ListContact } from './listContact/ListContact';

export const PhoneBook = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('Contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
    return;
  }, [contacts]);

  const formSubmitHandler = ({ name, number, id = nanoid() }) => {
    const newContact = { name, number, id };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const searchContact = e => {
    setFilter(e.currentTarget.value);
  };

  const filterList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section>
        <FormContact addContact={formSubmitHandler} />
        <SearchContact onChange={searchContact} filter={filter} />
        {contacts.length > 0 && (
          <ListContact contacts={filterList()} onClick={deleteContact} />
        )}
        {contacts.length < 1 && <h2>Contact list is empty</h2>}
      </Section>
    </>
  );
};
