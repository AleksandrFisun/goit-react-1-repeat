import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './section/Section';
import { FormContact } from './formContact/FormContact';
import { SearchContact } from './searchContact/SearchContact';
import { ListContact } from './listContact/ListContact';
import phoneBook from '../../data/phoneBook';

export default class PhoneBook extends Component {
  state = {
    contacts: phoneBook,
    filter: '',
  };

  formSubmitHandler = ({ name, number, id = nanoid() }) => {
    const { contacts } = this.state;
    const newContact = { name, number, id };

    contacts.find(contact => contact.name === name)
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
    const { filter } = this.state;

    return (
      <>
        <Section>
          <FormContact onSubmit={this.formSubmitHandler} />
          <SearchContact onChange={this.searchContact} filter={filter} />
          <ListContact
            contacts={this.filterList()}
            onClick={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
