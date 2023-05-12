import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Input, Button, Form, WrapperLabelInput } from './FormContact.styled';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };
  contactName = nanoid();
  contactNumber = nanoid();

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <h2>Phone Book</h2>
        <WrapperLabelInput>
          <label htmlFor={this.contactName}>Name</label>
          <Input
            onChange={this.onChange}
            value={name}
            type="text"
            name="name"
            id={this.contactName}
            placeholder="Aleksandr"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </WrapperLabelInput>
        <WrapperLabelInput>
          <label htmlFor={this.contactNumber}>Number</label>
          <Input
            onChange={this.onChange}
            value={number}
            type="tel"
            name="number"
            id={this.contactNumber}
            placeholder="+380956888227"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </WrapperLabelInput>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
