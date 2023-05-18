import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Input, Button, Form, WrapperLabelInput } from './FormContact.styled';

export const FormContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let contactNameId = nanoid();
  let contactNumberId = nanoid();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>Phone Book</h2>
      <WrapperLabelInput>
        <label htmlFor={contactNameId}>Name</label>
        <Input
          onChange={onChange}
          value={name}
          type="text"
          name="name"
          id={contactNameId}
          placeholder="Aleksandr"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </WrapperLabelInput>
      <WrapperLabelInput>
        <label htmlFor={contactNumberId}>Number</label>
        <Input
          onChange={onChange}
          value={number}
          type="tel"
          name="number"
          id={contactNumberId}
          placeholder="+380956888227"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </WrapperLabelInput>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
