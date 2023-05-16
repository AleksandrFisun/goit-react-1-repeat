import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './section/Section';
import { FormContact } from './formContact/FormContact';
import { SearchContact } from './searchContact/SearchContact';
import { ListContact } from './listContact/ListContact';

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const { contacts } = this.state;
    const contactsLocal = localStorage.getItem('Contacts', contacts);

    if (contactsLocal) {
      const parse = JSON.parse(contactsLocal);
      this.setState({ contacts: parse });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(contacts));
    }
  }

  formSubmitHandler = ({ name, number, id = nanoid() }) => {
    const { contacts } = this.state;
    const newContact = { name, number, id };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  searchContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterList = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Section>
          <FormContact onSubmit={this.formSubmitHandler} />
          <SearchContact onChange={this.searchContact} filter={filter} />
          {contacts.length > 0 && (
            <ListContact
              contacts={this.filterList()}
              onClick={this.deleteContact}
            />
          )}
          {contacts.length < 1 && <h2>Contact list is empty</h2>}
        </Section>
      </>
    );
  }
}
